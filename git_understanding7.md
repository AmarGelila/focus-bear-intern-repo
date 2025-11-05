# Understand git bisect #49
## Reflection 

#### What does git bisect do?
  Searchs which commit has the bug by giving it the start and end commits to search between and asks you to mark each commit as a bad or good.
  
#### When would you use it in a real-world debugging situation?
  when I have a lot of commits and work with many contributers.
  
#### How does it compare to manually reviewing commits?
  git bisect is faster as it takes O(log n) time , and optimal but requires automatic tests
