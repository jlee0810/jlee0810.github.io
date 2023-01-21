---
date: '2022-01-21'
title: 'Shell&Emacs Filesystem'
categories: ['CS35L', 'shell', 'emacs', 'filesystem']
summary: 'A look into what a shell and filesystem is and looks like'
thumbnail: './terminal.png'
---

# Lecture 1

## ************Shell************

sh - shell  and emacs 

Shell is a little program that wraps over the OS. The shell itself doesn’t know much. The shell gives an interface into the OS. 

You talk to the shell by text strings and gives back a response. All the real work is done by the operating system. 

Shell - **Glorified language processor**

![First ss](/Lecture_1/Untitled.png)

These command line interfaces are scriptable; makes it better the GUI 

rm -rf (delete everything in the home directory) 

emacs - GUI 

```
M-x shell RET (brings up the command line) 
``` 

![Second ss](/Lecture_1/Untitled_1.png)

See what files we have in the home directory

```
C-x d RET (See what is in my directory)
```

Directory is kind of like a file but not content but lists of files

Generally form a tree structure. They have a root directory, and underneath that more directories, etc.

![Third ss](/Lecture_1/Untitled_2.png)

```
rm *.pdf (removes all pdf files in the current directory)
```

```
rm * .pdf (removes all files in the home directory and then a file called .pdf
```

To test a shell command 

```
echo rm * .pdf (see what the command will do without actually doing it)
```

This will show the output of what the program/command you’re going to execute would do in this case delete

```
rm -rf 
```

-r  (recursive)

-force (have no permission but you want to proceed with the command)

```
mkdir trash
echo mv *.pdf trash
mv *.pdf trash
```

Now all the files moved from the home directory into the trash directory. Now we can navigate to the trash and see all the pdf files

## Buffer

- We want our apps to survive power outages and survive OS crashes
- We want our apps to be fast

These two goals compete with each other 

- We want our apps to be understandable

First goal - persistent storage

To also attack the second goal - have a cache or a buffer in emacs of what’s in storage

```
C-x C-f FILENAME RET
```

Emacs is modifying its buffer but the file hasn’t been created/saved yet

```
C-x C-s
```

Writes/saves the file

```
C-x b NAME RET
```

b means to switch the buffer

What is in the buffer doesn’t match persistent storage

```
C-x C-b 
```

Lists the buffers

The above command lists the buffers (or arrays of memory) - may correspond to a file. The other buffers are not associated with files, instead they’re arrays of text associated with emacs. When you exit emacs, those buffers will go away. Any work in there would be discarded

```
ls -l output column 1
```

“-” refers to a regular file, “d” refers to a directory “&” refers to a symbolic link

The contents of a symbolic link is treated as a file name by the operating system

Name of top level directory is /  (root). In root, bin is a symbolic link for usr/bin. So whenever you use bin it’ll automatically go to usr/bin.

Column 1 : 

Column 1 is the filetype. Columns 2-10 in have something like “rwxr-xr–”. These can be broken up into sets of 3.
These are permissions for which group has over this file. First 3 is for user (file owner). Second 3 is for group (group owner). Third 3 is for other (everyone else)

Permissions: r - read w - write x - execute

Column 2: 

File system usually thought about as a tree, but filesystem can be a graph. 

Files can exist in several different directories or in different places in the same directory. 

```
cd (change directory)
cd /usr/bin
mkdir e
mkdir f 
mkdir e/g
```

![Fourth ss](/Lecture_1/Untitled_3.png)

```
echo my txt >e/foo
```

“>” output of everything before it sent to the file after it. (now we have a new file foo in directory e that has “my txt”).

Now we can make another name for that same file:

```
ln e/foo e/bar
ls -l e/foo e/bar (we can see that it is the same file)
ln e/foo e/g/foo
ls -l e/foo (became 3 links)
ln e/g/foo f/baz
ls -l f/baz (4 links)
```

```
cat a b c
```

cat or “concatenate” prints out the contents of all the files supplied. If we supply any of the names of the links we created, it’ll print the same text because it’s all really just one file.

Column 2:  Is the hard link count 

Column 3: Owner

Column 4: Group

Column 5: # Bytes

Column 6-8: Last modified time

Column 9: name or name - > contents

Command “DU” recursively links through directories and prints out file names. If we allowed links back to parents, then DU would cause problems. No hard links to directories.

Terminology “/” root directory “.” current directory “..” parent directory

Hardlink is a clue to you how many pointers are pointing to the file

How does etc directory have 143 links? etc contains all the miscellaneous files where we don’t know where to put them. Every sub directory has a pointer to itself, and then a pointer from the parent of that sub directory. So # of sub directories is # of links - 2

![Fifth ss](/Lecture_1/Untitled_4.png)

You can have a hard link to a symbolic link.

```
ls -al (prints out everything such as . and ..)
ln -s g h (Create a symbolic link h that points to g) 
ln h i (Create a hardlink to g)
ls -al
```

Hard link is another name for same file. Neither one is more important than the other. Symbolic link is a separate entity. It’s a name that gets interpreted. Can think of it like a redirect on websites.