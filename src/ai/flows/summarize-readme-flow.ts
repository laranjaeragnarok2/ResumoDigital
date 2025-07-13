'use server';
/**
 * @fileOverview A flow to summarize README content.
 *
 * - summarizeReadme - A function that takes README content and returns a concise summary.
 * - SummarizeReadmeInput - The input type for the summarizeReadme function.
 * - SummarizeReadmeOutput - The return type for the summarizeReadme function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeReadmeInputSchema = z.string().describe('The full content of a README.md file.');
export type SummarizeReadmeInput = z.infer<typeof SummarizeReadmeInputSchema>;

const SummarizeReadmeOutputSchema = z.string().describe('A concise, one-paragraph summary of the README content.');
export type SummarizeReadmeOutput = z.infer<typeof SummarizeReadmeOutputSchema>;

export async function summarizeReadme(input: SummarizeReadmeInput): Promise<SummarizeReadmeOutput> {
  return summarizeReadmeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeReadmePrompt',
  input: {schema: SummarizeReadmeInputSchema},
  output: {schema: SummarizeReadmeOutputSchema},
  prompt: `You are an expert at summarizing technical project descriptions.
  
  Analyze the following README.md content and generate a single, compelling paragraph that summarizes the project's purpose, key features, and technologies used. The summary should be concise and easy to understand for a portfolio showcase.
  
  README Content:
  {{{input}}}`,
});

const summarizeReadmeFlow = ai.defineFlow(
  {
    name: 'summarizeReadmeFlow',
    inputSchema: SummarizeReadmeInputSchema,
    outputSchema: SummarizeReadmeOutputSchema,
  },
  async (readmeContent) => {
    if (!readmeContent.trim()) {
        return "A summary could not be generated for this project.";
    }
    const {output} = await prompt(readmeContent);
    return output!;
  }
);
