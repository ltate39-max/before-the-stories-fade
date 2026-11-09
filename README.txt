BEFORE THE STORIES FADE — FIRST WEBSITE PROTOTYPE

HOW TO OPEN IT
1. Unzip the folder.
2. Open index.html in Chrome, Safari, Firefox, or Edge.
3. Keep index.html, styles.css, and script.js together in the same folder.

WHAT IS INCLUDED
- A responsive opening page for desktop, tablet, and phone
- Leslie's 2:07 spoken introduction, with a written version and a photo of her and Dad
- Six interactive story chapters
- A poetry corner with four of Dad's typed poems, including "Lefty," which he wrote for Leslie: click a title to read it or see its original page; recordings can be added later
- Pop-up chapter previews
- A mobile navigation menu
- Subtle scroll animation and a reading-progress bar
- Dad in a yellow kayak beside the title and his black-and-white portrait beside "So many stories"

ADD ANOTHER POEM
1. Open script.js in VS Code and find the "const poems" section.
2. Copy an existing poem entry and change its title and text. To keep the line breaks, use
   backticks around the full poem instead of quotation marks, like this:
   text: `First line
Second line

Fourth line`,
3. If you have a photo of the typed page, put it in the images folder and set
   original: "images/your-photo.jpg" in that poem's entry.
4. If you have audio, create a folder named audio next to index.html. Place
   his recording there, then set audio: "audio/filename.m4a" (use its real name).
   The player appears automatically. If you have no recording yet, leave audio: "".
5. Keep a comma between the poem entries. A new clickable title appears automatically.
6. Open index.html in your browser and click the poem title to check it.

When copying the updated site to GitHub Pages, include the images folder and any audio folder too.

WHAT WE WILL CHANGE NEXT
1. Replace the remaining gray photograph placeholders with real family photographs.
2. Decide which stories will be included after the first interview.
3. Replace the chapter preview text with material from Dad's interviews.
4. Edit short audio clips and add accessible audio players and transcripts.
5. Add dates, locations, maps, or historical context only where they support his story.

SITE FILES
- index.html contains the words and structure of the page.
- styles.css controls colors, fonts, spacing, and layout.
- script.js contains the poems and controls the chapter pop-ups, mobile menu, progress bar, and animations.
- images/ contains Dad's portrait and photographs of the original typed poems.

This is a first draft, not a locked design. The placeholders are intentional: they let the structure work before the final photographs and recordings are ready.

STORYTELLING UPDATE — OCTOBER 18
The Storyteller chapter now includes an unedited conversation excerpt (about 6 minutes).
The CAF recording was converted to MP3 for browser playback; it was not cut.
The complete poem is available as four photographed typed pages on deadmans-hollow.html.
An audio transcript and a typed transcription of this poem have not been added yet.

UPLOAD THIS UPDATE TO GITHUB
Upload index.html, styles.css, script.js, README.txt, and deadmans-hollow.html
at the repository's top level. Also upload the audio folder and images folder,
keeping their names and subfolders. Do not upload the ZIP itself or nest the site
inside another before-the-stories-fade folder. The existing portrait and four
poetry-corner poems are included in this full package.
