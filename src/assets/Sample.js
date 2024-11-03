import { format } from "date-fns"

export const data = [
    {
        id: 1,
        title:"Skip to content",
        desc:" learning, motivation, and study Question 11: Being a self-directed learner means:Taking charge of your learning - This is the core of self-directed learning: actively taking ownership of your learning process.Question 12: Which of the following is an example of plagiarism? All of the above - Plagiarism occurs when you present someone else's work as your own, whether it's words, ideas, or even structure without proper attribution.Question 13: Which of the following is an example of intrinsic motivation?learning a new skill so that you can use it on a project you are excited to tackle in your workplace - Intrinsic motivation comes from within, driven by enjoyment, interest, or personal satisfaction",
        date:"23rd April 2024 - 11:15PM"
    },
    {
        id: 2,
        title:"above - Plagiarism ",
        desc:"g is an example of plagiarism? All of the above - Plagiarism occurs when you present someone else's work as your own, whether it's words, ideas, or even structure without proper attribution.Question 13: Which of the following is an example of intrinsic motivation?learning a new skill so that you can use it on a project you are excited to tackle in your workplace - Intrinsic motivation comes from within, driven by enjoyment, interest, or personal satisfaction",
        date:"23rd April 2024 - 11:15PM"
    },
    {
        id: 3,
        title:" whether it's words, ideas, or even structure without proper",
        desc:" learning, motivation, and study Question 11: Being a self-directed learner means:Taking charge of your learning - This is the core of self-directed learning: actively taking ownership of your learning process.Question 12: Which of the following is an example of plagiarism? All of the above - Plagiarism occurs when you present someone else's work as your own, whether it's words, ideas, or even structure without proper attribution.Question 13: Which of the following is an example of intrinsic motivation?learning a new skill so that you can use it on a project you are excited to tackle in your workplace - Intrinsic motivation comes from within, driven by enjoyment, interest, or personal satisfaction",
        date:"23rd April 2024 - 11:15PM"
    },
    {
        id: 4,
        title:"even structure",
        desc:" learning, motivation, and study Question 11: Being a self-directed learner means:Taking charge of your learning - This is the core of self-directed learning: actively taking ownership of your learning process.Question 12: Which of the following is an example of plagiarism? All of the above - Plagiarism occurs when you present someone else's work as your own, whether it's words, ideas, or even structure without proper attribution.Question 13: Which of the following is an example of intrinsic motivation?learning a new skill so that you can use it on a project you are excited to tackle in your workplace - Intrinsic motivation comes from within, driven by enjoyment, interest, or personal satisfaction",
        date:"23rd April 2024 - 11:15PM"
    },
    {
        id: 5,
        title:"you can use it on",
        desc:" learning, motivation, and study Question 11: Being a self-directed learner means:Taking charge of your learning - This is the core of self-directed learning: actively taking ownership of your learning process.Question 12: Which of the following is an example of plagiarism? All of the above - Plagiarism occurs when you present someone else's work as your own, whether it's words, ideas, or even structure without proper attribution.Question 13: Which of the following is an example of intrinsic motivation?learning a new skill so that you can use it on a project you are excited to tackle in your workplace - Intrinsic motivation comes from within, driven by enjoyment, interest, or personal satisfaction",
        date:"23rd April 2024 - 11:15PM"
    },
    {
        id: 6,
        title:"in your workplace",
        desc:" learning, motivation, and study Question 11: Being a self-directed learner means:Taking charge of your learning - This is the core of self-directed learning: actively taking ownership of your learning process.Question 12: Which of the following is an example of plagiarism? All of the above - Plagiarism occurs when you present someone else's work as your own, whether it's words, ideas, or even structure without proper attribution.Question 13: Which of the following is an example of intrinsic motivation?learning a new skill so that you can use it on a project you are excited to tackle in your workplace - Intrinsic motivation comes from within, driven by enjoyment, interest, or personal satisfaction",
        date:"23rd April 2024 - 11:15PM"
    },
    {
        id: 7,
        title:"actively taking ownership",
        desc:" learning, motivation, and study Question 11: Being a self-directed learner means:Taking charge of your learning - This is the core of self-directed learning: actively taking ownership of your learning process.Question 12: Which of the following is an example of plagiarism? All of the above - Plagiarism occurs when you present someone else's work as your own, whether it's words, ideas, or even structure without proper attribution.Question 13: Which of the following is an example of intrinsic motivation?learning a new skill so that you can use it on a project you are excited to tackle in your workplace - Intrinsic motivation comes from within, driven by enjoyment, interest, or personal satisfaction",
        date:"23rd April 2024 - 11:15PM"
    },
    {
        id: 8,
        title:"Intrinsic motivation",
        desc:" learning, motivation, and study Question 11: Being a self-directed learner means:Taking charge of your learning - This is the core of self-directed learning: actively taking ownership of your learning process.Question 12: Which of the following is an example of plagiarism? All of the above - Plagiarism occurs when you present someone else's work as your own, whether it's words, ideas, or even structure without proper attribution.Question 13: Which of the following is an example of intrinsic motivation?learning a new skill so that you can use it on a project you are excited to tackle in your workplace - Intrinsic motivation comes from within, driven by enjoyment, interest, or personal satisfaction",
        date:"23rd April 2024 - 11:15PM"
    },
    {
        id: 9,
        title:" attribution",
        desc:" learning, motivation, and study Question 11: Being a self-directed learner means:Taking charge of your learning - This is the core of self-directed learning: actively taking ownership of your learning process.Question 12: Which of the following is an example of plagiarism? All of the above - Plagiarism occurs when you present someone else's work as your own, whether it's words, ideas, or even structure without proper attribution.Question 13: Which of the following is an example of intrinsic motivation?learning a new skill so that you can use it on a project you are excited to tackle in your workplace - Intrinsic motivation comes from within, driven by enjoyment, interest, or personal satisfaction",
        date:"23rd April 2024 - 11:15PM"
    },
    {
        id: 10,
        title:" Which of the ",
        desc:" learning, motivation, and study Question 11: Being a self-directed learner means:Taking charge of your learning - This is the core of self-directed learning: actively taking ownership of your learning process.Question 12: Which of the following is an example of plagiarism? All of the above - Plagiarism occurs when you present someone else's work as your own, whether it's words, ideas, or even structure without proper attribution.Question 13: Which of the following is an example of intrinsic motivation?learning a new skill so that you can use it on a project you are excited to tackle in your workplace - Intrinsic motivation comes from within, driven by enjoyment, interest, or personal satisfaction",
        date:"23rd April 2024 - 11:15PM"
    },
    
]

 export const dateInOrder = () => {
    const dateObj = new Date();
    const formattedDate = format(dateObj,'dd/MM/yyyy p') 
    return formattedDate ;
 }