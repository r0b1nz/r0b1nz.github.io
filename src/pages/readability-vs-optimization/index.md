---
title: 'Emphasis: Code Readability or Optimization?'
date: '2020-07-18'
spoiler: No, I am not going to say both.
---

*Note: The following talk is very much focussed towards a software developer working with a mature engineering company and might not be that true for startups, though it will give insights to start up engineering teams to re-shape themselves as they grow.*  

I have seen folks who have just started career as a software engineer or have been just graduated from college getting ambivalent about whether to write a more optimized and performant code or go for a more readable approach. 
#### If you have this question in mind, congrats you have successfully started thinking about core software engineering practices.

This kind of thoughts are conflicting but exuberant, at one instance you want the code to be uderstandable and at the other instance, you want it to be best in performance to whatever optimization knowledge you may have for that langauge.

## Don't optimize everything
> Atleast not all the time

There's a law that is generally referred as 80/20. According to that, about 80% of the time the application runs only the 20% of the code. Many people refer it to a 90/10 rule as well. 
But the learning from it is, optimizing that 20% of the code will help the APIs/System improve their performance and effitiency. Spending time on the rest 80% of the code might not be that worthy of your and your orgaisation's time. 

## Understand and rephrase the question
### Is it readability or something else?
Let's take a step back and see what readability is actually providing us?
 - Better code review
 - Lesser time to fix a bug
 - Allowing your folks in the team to be able to contribute better to that piece of code.

> That doesn't mean you vote for readability always, but by envisioning these positives we can mark __Readability an important member of code being Maintainable__.

### Sure about optimization or again it's something else?
Optimization can be seen in majorly two ways
 - Effitiency (How you can do the same thing in an improved manner)
    - Eg. Using Set as data structure for a "search an element" program 
 - Performance (How quickly you accomplish things)
    - Eg. Using a faster CPU to improve "search an element" program

About making a piece of code performant, this is something which probabaly you don't have to care about unless you are actually building a low level API or directly talking with the hardware layer.

That means we are essentially refering to a __less effitient code v/s a more effitient code__.

## More Maintainable vs More Effitient code
> Fact: It is possible to write an effitient code that is readable as well, but just not all the time.

For mature and healthy engineering teams, it is more important to have a maintainable code base than working on adding __minute effitiencies__.

Nowadays servers are really powerful you don't easily come up with issues related to your code not being processed within the time limits. This scenario has less probability but definitely it doesn't mean it will never happen. In such scenarios writing the most effitient and performant code would be [__"Necessary"__](https://softwareengineering.stackexchange.com/questions/303339/optimization-how-much-time-saved-is-considered-worth-it).

But for all the other cases, coding minute effitiencies over readability and maintainability might not be that helpful for both the client and developers.

__That doesn't mean you write Ineffitient code! Your code has to be effitient. What level of effitiency it has, that needs your attention.__

#### How do you decide this? By increasing awareness.

## How to increase awareness?
To be know sure of when to deeply care about code performance, you should have a __very good grasp of the language and systems__ you (and your software/program) are working on. 

```In case of Java, you should know what optimizations the compiler does and what optimizations and memoizations are done at the runtime by the JVM.```	

## So..
By deafult go with better code maintainability, but beware of the language and systems and as soon as you think you __really__ need a performant code, switch to that coding mode.