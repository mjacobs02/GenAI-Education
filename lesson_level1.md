# Level 1

This section will break down three simple ways to leverage AI immediately to help in your lessons.

```{dropdown} **Video:** Walkthrough of the prompts in this section
<div style="text-align: center;">
    <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/9gwQJee2LAc?start=0" 
            title="Embedded Video" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
    </iframe>
</div>
```

---

## Prompt 1: Think-Pair-Share Activity
- What it is: This prompt helps professors design an engaging Think-Pair-Share activity tailored to their specific subject or topic. The structure includes three phases:
    1. Think: Students individually reflect on a thought-provoking question.
    2. Pair: They discuss their ideas with a partner.
    3. Share: Insights are shared with the larger group for collective learning.

- When to use it:
	- To spark meaningful discussions in the classroom.
	- To break up lectures and incorporate active learning.
	- To build teamwork and critical analysis skills during lessons.

- How it benefits professors:
Professors can integrate this prompt into workflows to quickly find good think pair share activities based on topics.


```{admonition} Think Pair Share Prompt
:class: important dropdown
    Please provide the topic or concept you want to design a Think-Pair-Share activity for:

    ***********************
    **[Insert Topic Here]**
    ***********************

    **Your Role:**
    You are an expert in designing engaging and effective Think-Pair-Share activities that foster collaborative learning and critical thinking. Your audience consists of university students at TU Delft, so the activity should be tailored to their academic interests in engineering, technology, policy, and management.

    **Task:**
    Based on the provided topic, design a Think-Pair-Share activity that is relevant, fun, and encourages meaningful discussion. The activity should include:

    1. **The Think Phase:**
        - Pose a thought-provoking and specific question or scenario related to the topic.
        - Ensure the question is clear, engaging, and requires students to apply their understanding of the topic.
    2. **The Pair Phase:**
        - Provide instructions for students to discuss their thoughts with a partner.
        - Encourage them to compare answers, challenge assumptions, or collaborate to refine their understanding.
    3. **The Share Phase:**
        - Design a simple yet interactive way for pairs to share their insights with the class. Make it engaging and easy to implement on the spot.

    **Guidelines:**

    - Ensure the activity is simple to execute in any classroom setting.
    - Keep the questions or scenarios relevant and challenging enough to spark curiosity and conversation.
    - Suggest ways to make the Share phase fun and engaging without requiring additional preparation or materials.

    **Example Output:**

    - For a topic like "AI Ethics," the Think phase might ask students to consider, "What would you do if your self-driving car had to make an ethical choice in an accident scenario?"
    - In the Pair phase, students discuss their answers and analyze how their choices differ.
    - The Share phase could involve pairs presenting their most interesting disagreement or insight in a quick, 30-second summary.

    **Additional Output:**
    Provide clear, concise bullet points that can be included on presentation slides to explain the task and activity to students. These should outline the steps for the Think, Pair, and Share phases in simple and engaging language suitable for immediate classroom use.
```

---

## Prompt 2: Multiple Choice Questions

- What it is:
A tool to help professors create high-quality multiple-choice questions. Each MCQ includes one correct answer, three plausible distractors, and an explanation of the answer.

- When to use it:
	- For quizzes, exams, or formative assessments.
	- To test student comprehension of key concepts after a lecture or module.

- How it benefits professors:
Helps professors quickly prepare exam questions to integrate into lessons ensuring students understand essential topics.

```{admonition} Multiple Choice Questions Prompt
:class: important dropdown
    Please provide the topic or subject area for which you want to create multiple-choice questions:

    ***********************
    **[Insert Topic Here]**
    ***********************

    **Role of the Assistant:**
    You are an expert educator specializing in creating assessment materials for university-level students.

    **Task:**
    Based on the topic provided, generate five multiple-choice questions that cover key concepts related to the subject. Each question should:

    - Be clear and concise.
    - Include one correct answer and three plausible distractors.
    - Test understanding of important ideas within the topic.

    Additionally, provide:

    - The correct answer for each question.
    - A brief explanation (1-2 sentences) of why the correct answer is appropriate.
```

---

## Prompt 3: Find a Relevant Analogy

- What it is:
A creative prompt that generates engaging analogies to explain complex concepts. These analogies are tailored to the interests of university students, especially in engineering, technology, policy, and management.

- When to use it:
	- While introducing difficult concepts to break the ice.
	- To clarify abstract topics during a lecture.
	- In study materials, presentations, or online resources.

- How it benefits professors:
Professors can use the analogies to make their teaching more engaging and accessible. This helps maintain student interest, particularly for dense or technical topics.

```{admonition} Relevant Analogy Prompt
:class: important dropdown
    Please provide the topic or concept you want to explain:

    ***********************
    **[Insert Topic Here]**
    ***********************

    **Your Role:**
    You are a creative thinker and skilled educator specialising in designing fun, entertaining, and out-of-the-box analogies to explain complex topics. Your audience consists of university students studying at TU Delft, so your analogies should be both engaging and tailored to their interests in engineering, technology, policy, and management.

    **Task:**
    Based on the provided topic, propose five unique and fun analogies that simplify the concept. Each analogy should:

    1. Be entertaining and out-of-the-box, sparking curiosity and engagement.
    2. Clearly explain the topic in a way that feels intuitive and memorable.
    3. Relate to things students find amusing or interesting, like pop culture, quirky everyday experiences, or creative scenarios.

    **Guidelines:**

    - Avoid overly serious or dry explanations. Make the analogies lively and fun while still effectively teaching the concept.
    - Include unexpected or humorous comparisons to keep the examples lighthearted and relatable.
    - Keep the explanations concise and ensure they make the topic easy to understand.

    **Example Topics:**

    - A policy framework could be compared to a “video game where players need to navigate complex rules to unlock the next level.”
    - A blockchain could be explained as a “group project where everyone keeps their own identical copy of the same report, so no one can cheat.”
    - Feedback loops in systems could be likened to “a DJ adjusting the volume at a party—too loud, and it creates ear-piercing feedback; too soft, and no one dances.”
```

---

```{admonition} Personal Note
:class: note
If you have another specific use case that’s not covered, try creating your own by referring to the [Prompt Engineering](ai_tool_database.md) section. 

You can also save this page as a PDF, upload it to your conversation, and say something like: I want you to create a prompt in the same format and style as the ones provided. First, ask me 5 questions that will improve the response you will be giving me. 
```

