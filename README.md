# Coding Assessment Repository  

Welcome to the Integrion SWE coding assessment! This repository contains three challenges (Easy, Medium, and Hard) designed to evaluate your problem-solving, coding skills, and ability to write efficient, clean, and well-tested code.  

---

## Instructions  

### 1. Clone the Repository  
Begin by cloning this repository to your local machine:  

```bash
git clone [repository_url]
cd coding-assessment-repo
2. Choose a Problem to Solve
Navigate to the folder of the desired difficulty level:

Easy: ./easy/problem.md
Medium: ./medium/problem.md
Hard: ./hard/problem.md
Each folder contains:

A problem.md file with the full problem description.
A solutionTemplate.js file to implement your solution.
A tests/ folder with pre-written test cases to validate your solution.
3. Solve the Problem
Implement your solution in the provided solutionTemplate.js file for the chosen problem.

Feel free to modify or extend the test cases in the tests/ folder to cover additional scenarios.

4. Run the Tests
Before submitting, verify that your solution passes all provided test cases:

Install dependencies (Jest for testing):

bash
Copy code
npm install
Run tests:

bash
Copy code
npm test
5. Submit Your Work
Once you’ve completed the assessment:

Fork this repository.
Create a new branch for your solution:
bash
Copy code
git checkout -b your-name-assessment
Commit and push your changes to your forked repository:
bash
Copy code
git add .
git commit -m "Completed coding assessment"
git push origin your-name-assessment
Share the link to your branch via email to [submission email].
Example Submission Email
Subject: Coding Assessment Submission - [Your Name]

Dear [Recruitment Team],

I have completed the coding assessment and submitted my solutions to my forked repository:
[Link to your branch].

Thank you for the opportunity. I look forward to hearing your feedback.

Best regards,
[Your Name]

Evaluation Criteria
Your submission will be evaluated based on the following:

Correctness

All provided test cases should pass successfully.
Bonus points for adding additional edge case tests.
Code Quality

Clear and readable code (use of comments, proper naming conventions).
Efficient and maintainable solutions.
Problem-Solving Approach

Logical flow of implementation.
Innovative and optimal solutions.
Testing

Comprehensive test coverage for edge cases.
Troubleshooting
Ensure Node.js and npm are installed on your system.
If you encounter errors, check that all dependencies have been installed:
bash
Copy code
npm install
If tests fail, revisit the problem description and ensure your solution meets the requirements.
Folder Structure
plaintext
Copy code
coding-assessment-repo/
│  
├── easy/  
│   ├── problem.md               # Easy problem description  
│   ├── solutionTemplate.js     # Solution file for easy-level question  
│   ├── tests/  
│   │   └── test.js         # Unit tests for easy-level question  
│  
├── medium/  
│   ├── problem.md               # Medium problem description  
│   ├── solutionTemplate.js     # Solution file for medium-level question  
│   ├── tests/  
│   │   └── test.js       # Unit tests for medium-level question  
│  
├── hard/  
│   ├── problem.md               # Hard problem description  
│   ├── solutionTemplate.js     # Solution file for hard-level question  
│   ├── tests/  
│   │   └── test.js         # Unit tests for hard-level question  
│  
├── README.md                    # Instructions for the repository  
├── package.json                 # Node.js configuration file  
├── .gitignore                   # Ignore node_modules and other unnecessary files  
└── node_modules/                # Installed dependencies  
Contact
If you have any questions or run into issues, please reach out to us at [support email].

Best of luck,
Integrion Recruitment Team

vbnet
Copy code







