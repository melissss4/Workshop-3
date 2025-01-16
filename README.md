# Workshop-3

Workshop 3:
Working with images

Drawing an image using randomised shapes forming- abstract depiction - painting



Workshop objective:

Collect a series of images. Make a p5.js sketch that generates a new collage each time the sketch is run.
Include manipulations of the images so that they change over time, using filters and/or other kinds of computational interventions.


Current code:
https://editor.p5js.org/melisssa/full/0Rx1A7lCG 

Keeping on the star theme I wanted to incorporate one image I have taken, and one I found online, for this I wanted to also reveal them with the same dots I have used in my previous projects.


One main issue is that my images that I used for this were much much too large to create a good sketch, however, every time I tried to resize them within p4.js the code would fail. I then tried to use an image resizer online, but then p5.js had an issue with being able to even pull these images from the file even though they were in the correct image type and were in the folder correctly. I then decided to just adjust my canvas size to fit the images, to do this I did not want to have to keep adjusting it until I found the right size, so instead I googled how to find out the image size, so I added this code to be able to view it in my console:  
print(_image.width); // to tell how big the pic is so i can resize my canvas
  print(_image.height); // to tell how big the pic is so i can resize my canvas


The main issue I had was finding out how to add multiple images to the same canvas, for this I tried to google how to do this, but all google came up with was how to do this in another coding language. I then went onto the p5.js guides and found a code that worked for adding a second image. However, this code had the pictures overlapping, and as my images have similar colour schemes, I wanted them next to each other instead so that I could differentiate. For this I had a play around with the code and figured out how to get them on different spaces/ get them to go next to each other:
 drawImage(moon, stars.width);  
Of course this just made my canvas all the wider.


I do think I have improved with being able to shorten my code due to going and finding help from p5.js libraries and tutorials.


My focus for the next workshop would be to make my images fit on the canvas without having to scroll to see the whole thing. 
