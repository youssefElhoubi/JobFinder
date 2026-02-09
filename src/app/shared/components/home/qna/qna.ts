import { Component } from '@angular/core';
interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-qna',
  imports: [],
  templateUrl: './qna.html',
  styleUrl: './qna.css',
})
export class Qna {
  
  faqs: FAQ[] = [
    {
      question: "Is JobConnect free for job seekers?",
      answer: "Yes! Creating a profile, uploading your resume, and applying to jobs is 100% free for all candidates. We only charge employers for premium job postings.",
      isOpen: false
    },
    {
      question: "How do I make my resume visible to employers?",
      answer: "Once you complete your profile, go to 'Settings' and toggle 'Profile Visibility' to 'Public'. This allows verified employers to find you in our talent database.",
      isOpen: false
    },
    {
      question: "Can I apply for jobs without an account?",
      answer: "Some listings allow 'Guest Apply', but we highly recommend creating an account to track your application status and receive interview requests directly.",
      isOpen: false
    },
    {
      question: "How does the AI matching work?",
      answer: "Our system analyzes the skills and experience in your resume and compares them with job requirements. We then give you a 'Match Score' to help you prioritize applications where you are most likely to succeed.",
      isOpen: false
    },
    {
      question: "I am an employer. How long does a job post stay active?",
      answer: "Standard job posts remain active for 30 days. You can choose to extend this period or upgrade to a 'Featured' post for higher visibility on the homepage.",
      isOpen: false
    }
  ];

  // 3. Toggle Function
  toggle(index: number) {
    // Option A: Allow multiple to be open
    // this.faqs[index].isOpen = !this.faqs[index].isOpen;

    // Option B: Accordion style (close others when one opens) - RECOMMENDED
    this.faqs.forEach((faq, i) => {
      if (i === index) {
        faq.isOpen = !faq.isOpen;
      } else {
        faq.isOpen = false;
      }
    });
  }


}
