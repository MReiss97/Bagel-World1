let quotesArray = [
  "What sets Bagel World apart: It's our unwavering commitment to excellence in every aspect of our craft. Our bagels are more than just round bread with a hole; they're a perfect symphony of texture, flavor, and authenticity. Each morning, our skilled artisans meticulously prepare these iconic delights from scratch, using premium ingredients and time-honored techniques. The result? A crispy exterior that gives way to a chewy, fluffy interior, embodying the essence of a genuine New York-style bagel. But our dedication to quality does not stop at bagels. Our wide array of spreads, ranging from classic cream cheese varieties to specialty flavors, complements our bagels perfectly. And let's not forget our menu of sandwiches and breakfast items, meticulously crafted to tantalize your taste buds with each bite.",
  "Visit Us: From the moment you walk through our doors, you're enveloped in the comforting aroma of freshly baked bagels, setting the tone for an unforgettable visit. Our warm and welcoming atmosphere is more than just a backdrop; it's a reflection of our commitment to treating every guest like a member of our extended family. At Bagel World, the experience extends beyond just the food. It's about the personal touch that flavors every interaction. Our friendly staff, embodying a genuine passion for exceptional service, is always ready with a smile and eager to make your visit exceptional. Picture yourself perusing our expansive selection of freshly baked bagels, each one a testament to our dedication to quality. Watch as our skilled bakers artfully prepare these iconic treats right before your eyes, infusing each bagel with the care and expertise that has become our hallmark."
];

let randomNumber = Math.floor(Math.random() * quotesArray.length);

document.getElementById('press-quote').textContent =  quotesArray[randomNumber].split(' — ')[0];

document.getElementById("hoursMarlboroContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("contactMarlboroContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("hoursMarlboroContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("contactManalapanContent").style.display = "none"; // Sets the style for the content to nothing

function hidePanels () {
    document.getElementById("hoursMarlboroContent").style.display = "none"; // Sets the style for the content to nothing
    document.getElementById("contactMarlboroContent").style.display = "none"; // Sets the style for the content to nothing
    document.getElementById("hoursManalapanContent").style.display = "none"; // Sets the style for the content to nothing
    document.getElementById("contactManalapanContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("hoursMarlboroTab").className = "accordionPanelTab"; // Adds the tab into the hidePanels function which hides each panel
document.getElementById("contactMarlboroTab").className = "accordionPanelTab"; // Adds the tab into the hidePanels function which hides each panel
document.getElementById("hoursManalapanTab").className = "accordionPanelTab"; // Adds the tab into the hidePanels function which hides each panel
document.getElementById("contactManalapanTab").className = "accordionPanelTab"; // Adds the tab into the hidePanels function which hides each panel
}

function showMarlboroHours () {
    hidePanels();
    document.getElementById("hoursMarlboroContent").style.display = "block"; // Opens up the tab when clicked
    document.getElementById("hoursMarlboroTab").className = "accordionPanelTab highlight"; // Highlights the tab when clicked
}

function showMarlboroContent () {
    hidePanels();
    document.getElementById("contactMarlboroContent").style.display = "block"; // Opens up the tab when clicked
    document.getElementById("contactMarlboroTab").className = "accordionPanelTab highlight"; // Highlights the tab when clicked
}

function showManalapanHours () {
  hidePanels();
  document.getElementById("hoursManalapanContent").style.display = "block"; // Opens up the tab when clicked
  document.getElementById("hoursManalapanTab").className = "accordionPanelTab highlight"; // Highlights the tab when clicked
}

function showManalapanContent () {
  hidePanels();
  document.getElementById("contactManalapanContent").style.display = "block"; // Opens up the tab when clicked
  document.getElementById("contactManalapanTab").className = "accordionPanelTab highlight"; // Highlights the tab when clicked
}
