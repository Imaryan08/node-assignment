## Schema

- user
- post
- comment

## User Schema

- first_name
- city
- mobile

## Post Schema

- title
- description
- userId : who created the post

## Comment Schema

- comment
- postId : on which post this comment is done
  - userId : who created this post
- userId : which user did this comment

> Users
    >> get all the users
    >> get one user
    >> update user
    >> delete user

    >> get all the posts created by user
    >> get all the comments by particular user

> Posts
    >> get all the posts
    >> get one post
    >> update post
    >> delete post

> Comments
    >> get all the comments
    >> get one comment
    >> update comment
    >> delete comment













--------------------------------------------------------------------------------------------------------------------

Markdown is a lightweight markup language that is used for formatting plain text. It is commonly used to create documents with simple formatting, such as headings, lists, links, and emphasis. Markdown syntax is easy to learn and widely supported on various platforms. Here are some commonly used Markdown syntax elements:
Headings:

To create headings, you can use hash symbols (#). The number of hash symbols determines the level of the heading. For example:

shell

# Heading 1

## Heading 2

### Heading 3

Text Formatting:

    Bold: To make text bold, surround it with double asterisks (**text**) or double underscores (__text__).
    Italic: To italicize text, surround it with single asterisks (*text*) or single underscores (_text_).
    Strikethrough: To add a strikethrough effect to text, use two tildes (~~text~~).

Lists:

    Unordered List: To create an unordered list, start each line with a hyphen (-), plus sign (+), or asterisk (*).
    Ordered List: To create an ordered list, start each line with a number followed by a period (e.g., 1., 2., 3.).

Links:

To create a hyperlink, use square brackets ([]) for the link text followed by parentheses (()) containing the URL. For example:

less

[OpenAI](https://openai.com)

Images:

To insert an image, use an exclamation mark (!), followed by square brackets ([]) for the alt text, and parentheses (()) containing the image URL. For example:

less

![Alt Text](https://example.com/image.jpg)

Blockquotes:

To create a blockquote, prefix the text with a greater-than sign (>). You can also nest blockquotes by adding additional greater-than signs. For example:

css

> This is a blockquote.
>
> > This is a nested blockquote.

Code:

To format inline code, enclose it within backticks (``). For example:

scss

Use the `print()` function to display output.

To create a code block, start and end the block with three backticks (```). You can also specify the programming language immediately after the opening three backticks for syntax highlighting. For example:

python

def greet(name):
print("Hello, " + name + "!")

These are just a few examples of Markdown syntax. Markdown supports additional features like tables, horizontal rules, and more. Markdown is widely used in platforms like GitHub, Reddit, and Stack Overflow to format content.
Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT May 12 Version
