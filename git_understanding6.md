# Advanced Git Commands & When to Use Them #50

## Reflection

#### What does each command do?

- git checkout main -- <file>

  - Revert changes in the current branch to match main version without changing context
  - Restore a deleted file from main

- git cherry-pick <commit>
  Apply a commit or more from a another branch to the current branch without merging the hole branch

- git log
  Shows commits history

- git blame
  Shows each line most recent change information (who make the changes , which commit , time ) in a specific file

#### When would you use it in a real project (hint: these are all really important in long running projects with multiple developers)?

    When dealing with other teammates code

#### What surprised you while testing these commands?

    The details git blame provide is really noticable and has many options to customize the output
