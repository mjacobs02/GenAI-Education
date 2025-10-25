# 1. Introduction

The arrival of generative AI has fundamentally changed how we access, create, and share knowledge. These generative AI systems, particularly large language models (LLMs), work by predicting the next word based on patterns from vast amounts of text. Despite this simple mechanism, they produce remarkably complex and human-like responses.

Think of it like a chef who has memorized every recipe ever written. LLMs know which ingredients work together and in what amounts, but they have no sense of taste or smell. When you ask for "a rustic, autumnal, gluten-free mushroom dish," they don't imagine flavors. Instead, they calculate: "Thyme appears with mushrooms in 87% of rustic recipes. Root vegetables correlate highly with autumnal dishes. Buckwheat flour is the most probable gluten-free substitute." They build the recipe using these probabilities. The result is a delicious dish, not because they understand flavor, but because they've mastered the statistical relationships between ingredients. Nevertheless, the role of the chef becomes extremely important to actually test and verify new recipes to see if they taste good. Similarly, the role of students and teachers is to apply critical thinking and contextual understanding to the AI's output, ensuring it aligns with genuine learning and meaning.

```{dropdown} Optional: Want to better understand how LLMs work?
For a simple overview of how LLMs work, watch the following video by Grant Sanderson (3Blue1Brown):

<div style="text-align: center;">
    <iframe width="560" height="315" 
            src="https://www.youtube-nocookie.com/embed/LPZh9BOjkQs" 
            title="LLMs Explained" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
    </iframe>
</div>
<br>
Key takeaways from the video:

- **[00:41] Probabilistic selection:** Models assign probabilities to all possible next words and often select less likely options randomly, explaining why identical prompts can yield different responses.  
- **[03:59] Human refinement:** Raw models undergo Reinforcement Learning with Human Feedback (RLHF), where human reviewers correct unhelpful or problematic outputs.  
- **[04:38] Transformer architecture:** Modern LLMs use the Transformer model, which processes all input text simultaneously rather than sequentially.  
- **[05:13] Attention mechanism:** Words “talk to one another” to refine their meaning based on surrounding context (distinguishing “river bank” from “financial bank”).  
- **[06:38] Black box limitation:** It remains extremely difficult to determine why models make specific predictions, making them hard to interpret and debug.

For a more in-depth explanation, check out the multi-episode series <a href="https://www.3blue1brown.com/topics/neural-networks" target="_blank" rel="noopener noreferrer">Neural Networks by 3Blue1Brown</a>
```


AI's rapid rise and widespread adoption have caught the education world off-guard, with little time to adjust. Banning the technology is a losing battle as it simply pushes use underground, where students can't receive the guidance they need to use it responsibly. The key principle is ensuring AI serves as a tool, not a replacement for learning. While simple to state, this can be hard to implement consistently. This book provides a comprehensive overview of AI in education, shifting your focus from reactive to proactive. It achieves this by guiding you through the foundational principles that address the core limitations of generative AI, ensuring you can integrate the technology effectively for the long term.

```{image} ./Images/Intro_Chapter_Overview.png
:alt: Intro_Chapter_Overview
:width: 700px
:align: center
```
<br>
In the following section, you'll learn how to use the books custom chatbot, your learning tutor that personalises the concepts discussed in this book to your teaching. Next, you'll get an overview of available AI tools and when to use what. Then we'll explore AI's risks in education and why both knowledge delivery and assessment must change. The two chapters in the section "Tranforming Teaching" detail these changes, grounded in timeless principles and designed for practical use. Finally, we'll examine the future: AI-assisted grading, group projects, and academic research.
<br>
<br>
This technology will continue to evolve, but the fundamental principles you learn here will not. This book is your foundation for building an effective, lasting approach to education in the age of AI, free from the constant need to adapt to every new update.