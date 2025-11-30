### Static Analysis Checks in CI/CD #36

##### What is the purpose of CI/CD?
Continous integration and Continuous Developement are about Automating tasks at specific times or when something happens like a pull request or other.

##### How does automating style checks improve project quality?
Automating style checks ensures best practices are followed , saves time and reduces human errors which reflect on the overall quality of the project.

##### What are some challenges with enforcing checks in CI/CD?
Enforcing checks may have side effects for example a project should be deployed but it fails due to linting checks errors,
or something that happend with me that I have initlized markdown linting and spellchec CI workflow in a repo that has already many .md files , 
when I make a pull request it fails due to more than 1000 .md linting erros  , so I think workflow should be initilized at the start of the project.

##### How do CI/CD pipelines differ between small projects and large teams?
CI/CD differs between small and large projects in many aspects like complexity , number of pipelines , execution speed and failure impact ,
for example a small project may have one linear pipeline all tests runs in one stage and deploys directly to production 
while a project with a large team may have multiple parallel pipelines , seperated stages and complex dependencies.
