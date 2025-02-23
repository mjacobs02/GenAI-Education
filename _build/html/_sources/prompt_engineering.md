# Prompt Engineering

This section is all about prompting, a fundamental skill for leveraging AI effectively. Being able to prompt well is like having the master key to a treasure chest: it unlocks the full potential of what AI can offer. Whether you’re new to prompting or already have a foundation, I’d recommend starting with the video. Even if the basics seem familiar, it offers a fresh perspective and introduces a six-part formula for crafting effective prompts. Follow this by delving into the summary to deepen your understanding of why these principles work so well.

## Video
The video below introduces a 6-part formula for crafting effective prompts for ChatGPT and other large language models: Task, Context, Exemplars, Persona, Format, and Tone. 
I would highly recommend watching this video as it gives a geat outline to what makes us a good prompt. If you focus on consistently applying these 6 principles you shouldn't have a problem prompting in the future.
<div style="text-align: center;">
    <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/jC4v5AS4RIM" 
            title="Welcome to Jupyter Book" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
    </iframe>
</div>

---

## Summary
1. **Task is Key**: State what you want the AI to do. Examples: "Generate potential research questions related to...", "Summarize key findings from these research papers...", "Create a syllabus outline for a course on...".
2. **Context is Crucial**: Provide background information. Who is the target audience (students, fellow researchers)? What are the learning objectives? Example: "Create a syllabus outline for a first-year bachelor course on sustainable engineering, focusing on circular economy principles."
3. **Exemplars Enhance Output**: Give examples of the desired output. This drastically improves quality. Example: If asking for research questions, provide examples of well-formulated research questions in the relevant field. If asking for a syllabus, provide an example syllabus or a link to one.
4. **Persona and Format Shape Response**: Tell ChatGPT who it should be "acting" as. Example: "Act as a leading expert in blockchain..." or "Act as an experienced TU Delft professor designing a new course...". This is adds context implicitly. Instead of explicitly stating "professors value conciseness, passion for the subject, and use simple language," you simply say "act as a university professor," and the LLM draws on its training data to infer these characteristics.
5. **Choose the right Format**: Tell ChatGPT how you want the output formatted. Examples: "Use bullet points," "Create a table," "Write a concise abstract," "Format as a LaTeX document."
6. **Tone Matters**: Define the desired tone of voice. Examples: "Use a formal, academic tone," "Use an engaging and accessible tone for undergraduate students," "Use a concise and technical tone suitable for a scientific publication."

---

## Other Helpful Tips
```{dropdown} Advanced customizability
Many AI tools include advanced customization features with names that differ by platform. Examples include custom instructions, memory, and GPTs (AI models tailored to specific needs). These tools can enhance workflow efficiency and provide additional flexibility, but they’re generally only useful for advanced scenarios.

If your needs are simple, you likely won’t need these options. For more complex projects, though, they can make a difference.
```

```{dropdown} How to address hallucinations
Large Language Models (LLMs) excel in producing text but can sometimes generate convincingly inaccurate information, a phenomenon known as "hallucinations." The best way to combat this is use tools trained to minimize hallucinations such as NotebookLM (More on this in [AI Tools Database](ai_tool_database.md)). 

However if using this alternative is not possible her are some strategies to achieve more reliable outcomes. 
1. **Add Your Own Knowledge Sources**: If you integrate your own sources (eg PDFs) into LLMs and ask them to reference from those, you gain more control over the dataset used. While it’s not a perfect solution, this approach significantly reduces hallucinations by grounding the AI's outputs in trusted and verifiable information. Setting clear boundaries for the AI helps ensure its responses are more accurate and aligned with reliable data.

2. **Utilize Real-Time Information Models**: When you need the latest information, standard AI tools might not be enough since they can’t update themselves. That’s where tools like Perplexity or ChatGPT with search features come in handy. These tools pull up-to-date data and often include links to their sources, making it simple for you to verify. This is especially useful for fast-changing topics or things you need to fact-check quickly.

3. **Decompose Complex Tasks**: AI works best when given focused tasks. For TU Delft professors, instead of asking for an entire course syllabus in one go, start with smaller requests like, “Summarize the key learning objectives for an introductory python course.” Then, follow up with, “Provide exercises related to variables, loops, and conditionals.” This approach ensures clarity, allows you to verify results step by step, and helps the AI allocate its resources effectively.
```
```{dropdown} More advanced prompting techniques

Advanced prompting methods, such as chain-of-thought prompting and megaprompts, enhance AI accuracy and response structure. 

1. **Chain-of-thought prompting** guides the AI to reason step-by-step, improving logical clarity and consistency. Learn more about this method [here](https://www.promptingguide.ai/techniques/cot).

2. **Megaprompts**, on the other hand, provide detailed and comprehensive instructions to minimize ambiguity and align outputs with specific needs. Explore megaprompts in detail [here](https://medium.com/messy-problems-original-concepts/mega-prompts-turning-expertise-into-code-4e19f3ea9a58).

For a broader overview of advanced prompting techniques, visit [Prompt Engineering Guide](https://www.promptingguide.ai/techniques).
```
