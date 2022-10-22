const containerDiv = document.getElementById('container');

//NAVBAR
const navbar = document.createElement('nav');
containerDiv.append(navbar);

const navList = document.createElement('ul'); 
navbar.append(navList);

const companyName = document.createElement('h1');
companyName.innerText = "HighOnCoding";
const navItemOne = document.createElement('li');
navItemOne.innerText = "Home";
const navItemTwo = document.createElement('li');
navItemTwo.innerText = "Categories";   
navList.append(companyName, navItemOne, navItemTwo);

//MAIN
const main = document.createElement('main');
containerDiv.append(main);

//main paragraph
const mainParagraph = document.createElement('div');
mainParagraph.id = 'mainParagraph';
main.append(mainParagraph);
const paragraphHeading = document.createElement('h2');
mainParagraph.append(paragraphHeading);
paragraphHeading.innerText = 'Curse of the Current Reviews';
const paragraphContent = document.createElement('p');
mainParagraph.append(paragraphContent);
paragraphContent.innerText = 'When you want to buy any application from the Apple iTunes store you have more than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice dependent on three important factors price, screenshot and reviews.'

//Posts
const mainPosts = document.createElement('div');
mainPosts.id = 'mainPosts';
main.append(mainPosts);

//Post One
const postOne = document.createElement('div');
postOne.id = 'postOne';
mainPosts.append(postOne);

const postHeaderOne = document.createElement('h3')
postOne.append(postHeaderOne);
postHeaderOne.innerText = 'Hello WatchKit';

const postParOne = document.createElement('p');
postParOne.innerText = 'Last month Aople released the anticioated watcnKit Framework for developers in the form of Os 8.2 bera sok release. The Watchkit framework enable the developers to create Apple watch applications. in this article we are going to focus on the basics of getting started with the Watcnkit framework and develooing apos for the Aone Watch.'
postOne.append(postParOne);

const responsesOne = document.createElement('ul')
postOne.append(responsesOne);
const commentsOne = document.createElement('li');
const likesOne = document.createElement('li');
responsesOne.append(commentsOne, likesOne)

commentsOne.innerText = '12 comments'
likesOne.innerText = '124 likes'


//Post Two
const postTwo = document.createElement('div');
postTwo.id = 'postTwo';
mainPosts.append(postTwo);

const postHeaderTwo = document.createElement('h3')
postTwo.append(postHeaderTwo);
postHeaderTwo.innerText = 'Introduction to Swift';

const postParTwo = document.createElement('p');
postParTwo.innerText = 'Swift is a modern programming language developed by Apple to create the next generation of iOS and O9% applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic conceots in the Swift languace and now vou can get started.'
postTwo.append(postParTwo);

const responsesTwo = document.createElement('ul')
postTwo.append(responsesTwo);
const commentsTwo = document.createElement('li');
const likesTwo = document.createElement('li');
responsesTwo.append(commentsTwo, likesTwo)

commentsTwo.innerText = '15 comments'
likesTwo.innerText = '45 likes'




// STYLES 
//navbar
navList.style.backgroundColor = '#36B8E8';
navList.style.margin = '0';
navList.style.listStyleType = 'none';
navList.style.color = 'white';

companyName.style.display = 'inline-block';
companyName.style.padding = '0 50px 0 15px';

navItemOne.style.display = 'inline-block';
navItemOne.style.padding = '0 20px 0 20px';
navItemOne.style.textAlign = 'center';
    
navItemTwo.style.display = 'inline-block';
navItemTwo.style.padding = '0 20px 0 20px';
navItemTwo.style.textAlign = 'center';
 
//main
mainParagraph.style.backgroundColor = 'lightGrey'
mainParagraph.style.margin = '15px'
paragraphHeading.style.padding = '10px 10px 0 10px'
paragraphContent.style.padding = '10px'

//posts 
mainPosts.style.margin = '10px 25px';

postHeaderOne.style.color = '#36B8E8';
postHeaderOne.style.marginBottom = '0'
postParOne.style.marginBottom = '0'

responsesOne.style.backgroundColor = '#F8800F'
responsesOne.style.listStyle = 'none';
responsesOne.style.color = 'white';
responsesOne.style.padding = '0'
responsesOne.style.marginTop = '0'

commentsOne.style.display = 'inline-block'
commentsOne.style.margin = '3px'
likesOne.style.display = 'inline-block'
likesOne.style.margin = '3px 15px'
    
postHeaderTwo.style.color = '#36B8E8';
postHeaderTwo.style.marginBottom = '0'
postParTwo.style.marginBottom = '0'

responsesTwo.style.backgroundColor = '#F8800F'
responsesTwo.style.listStyle = 'none';
responsesTwo.style.color = 'white';
responsesTwo.style.padding = '0'
responsesTwo.style.marginTop = '0'
    
commentsTwo.style.display = 'inline-block'
commentsTwo.style.margin = '3px'
likesTwo.style.display = 'inline-block'
likesTwo.style.margin = '3px 15px'



// my orange color #F8800F 
//my blue color #36B8E8