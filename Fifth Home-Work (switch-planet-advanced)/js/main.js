function get_data(){
    var number_planet = document.querySelector(".number_planet").value;
    var result_title = document.querySelector(".text-title");
    var result = document.querySelector(".text");

    var number = +number_planet;

    if (number > 9 || number <= 0){
        result_title.innerHTML = "Number of planet must be bigger then 0 or less than 9";
        result.innerHTML = "R.T.F.M";

    }
    else{
        switch (number){
            case 1:
                result_title.innerHTML = "This is Mercury"
                result.innerHTML = "Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 87.97 days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods.";
            break;
            case 2:
                result_title.innerHTML = "This is Venus"
                result.innerHTML = "Second planet from the Sun, orbiting it every 224.7 Earth days.[13] It has the longest rotation period (243 days) of any planet in the Solar System and rotates in the opposite direction to most other planets (meaning the Sun rises in the west and sets in the east)";
            break;
            case 3:
                result_title.innerHTML = "This is Earth"
                result.innerHTML = "Third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago. Earth's gravity interacts with other objects in space, especially the Sun and the Moon.";
            break;
            case 4:
                result_title.innerHTML = "This is Mars"
                result.innerHTML = "Fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war, and is often referred to as the because the reddish iron oxide prevalent on its surface gives it.";
            break;
            case 5:
                result_title.innerHTML = "This is Jupiter"
                result.innerHTML = "Ruling planet of Sagittarius and it is exalted in Cancer. In classical Roman mythology, Jupiter is the ruler of the gods and their guardian and protector, and his symbol is the thunderbolt.";
            break;
            case 6:
                result_title.innerHTML = "This is Saturn"
                result.innerHTML = "In classical Roman mythology, Saturn is the god of seeds, crops, and the harvest (agriculture), leader of the titans, father and founder of civilizations, social order, and conformity. The glyph is shaped like a scythe, but it is known as the crescent below the cross, whereas Jupiter's glyph is the crescent above the cross";
            break;
            case 7:
                result_title.innerHTML = "This is Uranus"
                result.innerHTML = "Uranus is the personification of the sky. The planet Uranus is very unusual among the planets in that it rotates on its side, so that it presents each of its poles to the Sun in turn during its orbit; causing both hemispheres to alternate between being bathed in light and lying in total darkness over the course of the orbit.";
            break;
            case 8:
                result_title.innerHTML = "This is Neptune"
                result.innerHTML = "Neptune is the god of the sea, and the deep, ocean blue color of the planet Neptune reflects this.[33] Its glyph is taken directly from Neptune's trident, symbolizing the curve of spirit being pierced by the cross of matter.";
            break;
            case 9:
                result_title.innerHTML = "This is Pluto"
                result.innerHTML = "In classical Roman mythology, Pluto is the god of the underworld who is extremely wealthy. The alchemical symbol was given to Pluto on its discovery, three centuries after alchemical practices had all but disappeared. The alchemical symbol can therefore be read as spirit over mind, transcending matter.";
            break;
            default:
                result_title.innerHTML = "Enter a >NUMBER<";
                result.innerHTML = "R.T.F.M";
            break; 
        }
    }
}