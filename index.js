exports = module.exports = new FoodsaverOCR();

function FoodsaverOCR(){

    var map = {
        "10mhtos": "tomatoes",
        "[neese": "cheese",
        "addle": "apple",
        "anchuvies": "anchovies",
        "applts": "apples",
        "babv": "baby",
        "banams": "bananas",
        "bbnbnrs": "bananas",
        "bcn": "bacon",
        "beeys": "beets",
        "beneless": "boneless",
        "berns": "beans",
        "bfhns": "beans",
        "bfikerv": "bakery",
        "bhkerv": "bakery",
        "bhnrnrs": "bananas",
        "blackfgrest": "blackforest",
        "breed": "bread",
        "brehd": "bread",
        "brnn": "brown",
        "brnrnrs": "bananas",
        "brst": "breast",
        "bsphrrgus": "asparagus",
        "burher": "burger",
        "candv": "candy",
        "carrois": "carrots",
        "chickn": "chicken",
        "ciiierio": "citterio",
        "cilrntro": "cilantro",
        "ckn": "chicken",
        "ckshews": "cashews",
        "crhckers": "crackers",
        "cruahed": "crushed",
        "cruliflou": "cauliflower",
        "cucuhbfrs": "cucumbers",
        "culdrs": "colors",
        "eavendish": "cavendish",
        "ehgel": "bagel",
        "eood": "food",
        "ereen": "green",
        "eucumbers": "cucumbers",
        "faijins": "raisins",
        "filleys": "fillets",
        "fldur": "flour",
        "frenlh": "french",
        "frzn": "frozen",
        "ghlb": "gala",
        "grlc": "garlic",
        "grn": "green",
        "grtorrde": "gatorade",
        "h'hite": "white",
        "han": "ham",
        "heirluum": "heirloom",
        "hershev": "hershey",
        "hgnev": "honey",
        "hny": "honey",
        "hon[v": "honey",
        "honev": "honey",
        "honeynut": "honey nut",
        "hpple": "apple",
        "hrddeoli": "broccoli",
        "hrlf": "half",
        "hrushed": "brushed",
        "iraoiiional": "traditional",
        "khle": "kale",
        "kidnev": "kidney",
        "lemgns": "lemons",
        "lemonaoe": "lemonade",
        "lerf": "leaf",
        "lhcinrtd": "lacinato",
        "lhich": "chick",
        "lhrge": "large",
        "loca1": "local",
        "milkjf": "milk",
        "min!": "mini",
        "mpl": "maple",
        "mx": "mix",
        "nhole": "whole",
        "nhvel": "navel",
        "ninneolas": "minneolas",
        "nuggt": "nugget",
        "oananas": "bananas",
        "oarrois": "carrots",
        "oeans": "beans",
        "ohoc": "choc",
        "org": "organic",
        "p'nut": "peanut",
        "p01a10": "potato",
        "p1nk": "pink",
        "pdtbtdes": "potatoes",
        "pkg": "packaged",
        "pries": "fries",
        "puddivg": "pudding",
        "putatdes": "potatoes",
        "rhspberpies": "raspberries",
        "rhspberry": "raspberry",
        "rmprry": "raspberry",
        "roo1": "root",
        "rrisins": "raisins",
        "rvocrdo": "avacado",
        "salao": "salad",
        "salmdn": "salmon",
        "saus": "sausage",
        "sbursh": "squash",
        "sdls": "seedless",
        "sduf": "soup",
        "seafdod": "seafood",
        "sgr": "sugar",
        "sheeicofn": "sweetcorn",
        "si'rduts": "sprouts",
        "sirldin": "sirloin",
        "sneei": "sweet",
        "sneet": "sweet",
        "sneetcorn": "sweetcorn",
        "snk": "snack",
        "spachehi": "sphagetti",
        "sterk": "steak",
        "strruberries": "strawberries",
        "strruberry": "strawberry",
        "strubry": "strawberry",
        "sudium": "sodium",
        "suee!": "sweet",
        "sunfluwer": "sunflower",
        "suursh": "squash",
        "sweetcofn": "sweetcorn",
        "tdmtd": "tomato",
        "tdnhdes": "tomatoes",
        "thiehs": "thighs",
        "tohhto": "tomato",
        "towatdes": "tomatoes",
        "turkev": "turkey",
        "uhite": "white",
        "uidhlib": "vidalia",
        "uil": "oil",
        "uine": "wine",
        "uniohs": "unions",
        "vallev": "valley",
        "veast": "yeast",
        "vegt": "vegetables",
        "velljw": "yellow",
        "ydgurt": "yogurt",
        "yhms": "yams",
        "yugurt": "yogurt",
        "zuehihn!": "zucchini"
    };
    return {
        removeGibberish: function(line){            

            // Remove sequences of numbers
            line = line.replace(/\s[\d\s\W]+\s/g, " ");
            console.log(line);

            // Remove single characters
            line = line.replace(/(\s|^)[^\s](\b|$)/g, "");
            console.log(line);

            // Remove "words" that have no english characters
            line = line.replace(/\b[^\sa-zA-Z]+\b/g, "");

            // Trim whitespace
            line = line.trim();

            return line;
        },     
        parse: function(text, removeJunk = true){

            if (map.hasOwnProperty(text)){
                return map[text];
            } else {

                if (removeJunk){
                    return "";
                } else {
                    return text;
                }                
            }
        }
    }
}