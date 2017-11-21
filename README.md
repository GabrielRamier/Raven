# Raven 1.3
Some kind of ongoing framework.

The framework is given as is and can have some problem that can be fixed without a due date.

Folder organisation
==========================================

Raven {

     dist {
          css {}
          favicons {}
          font {}
          img {}
          js {}
     }

     gui {
          components {}
          layouts {}
     }

     process {
          img {}
          js {}
          scss {
               components {}
               layouts {}
               utilities {
                    font.scss
                    functions.scss
                    magnific-popup.scss
                    mixins.scss
                    reset.scss
                    typography.scss
                    variables.scss
               }
               main.scss
          }
     }

     gulpfile.js
     package.json

}


------------------------------------------


Content
==========================================

dist : the dist file is where the code is compiled. The only things you should
       put in this folder are the fonts, the favicons and the js library that you want to access.

gui : this is the workplace. The template in it is ready to be used. The link
      to the style sheet as already been made. Links to script.js, to jQuery 3.2.1
      and to magnific-popup 1.1.0 are there too.

process :

     - img : in this folder you will find every image/svg of the project.
             A gulp task is set to compress those images.

     - js : in this folder you will find the script.js. A gulp task is set to compress the file.
            A "Scroll to" function and a commented magnific-popup function has been added to it.

     - scss : in this folder you will find the main.scss where the import to every
              file.scss that you want are import and compiled.

              - components : in this folder you will find the style of your components.
              - layouts : in this folder you will find the style of your layouts.
              - utilities : see below.

utilities : in this folder you will find some files to help you with the style of your website

     - font : in this file you will import local font and/or google font.
     - function : in this file you will find so functions to make your life easier.
     - magnific-popup : in this file you will find the magnific-popup style sheet version 1.1.0.
     - mixins : in this file you will the Media-Queries mixins.
     - reset : in this file you will a reset style sheet.
     - typography : in this file you can add the styles of your major texts (title, subtitle, paragraph, etc.).
     - variables : in this file you will find every variables you will need in your style sheet and an import of the grid.
