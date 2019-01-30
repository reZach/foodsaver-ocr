exports = module.exports = new FoodsaverOCR();

function FoodsaverOCR(){

    var map = {
        "veast": "yeast",
        "honev": "honey",
        "hgnev": "honey",
        "turkev": "turkey",
        "puddivg": "pudding",
        "fldur": "flour",
        "sweetcofn": "sweetcorn",
        "sheeicofn": "sweetcorn",
        "kidnev": "kidney",
        "h'hite": "white",
        "[neese": "cheese",
        "burher": "burger",
        "frenlh": "french",
        "pries": "fries",
        "zuehihn!": "zucchini",
        "eucumbers": "cucumbers",
        "eavendish": "cavendish",
        "putatdes": "potatoes",
        "hrushed": "brushed",
        "hrddeoli": "broccoli",
        "ereen": "green",
        "si'rduts": "sprouts",
        "tdnhdes": "tomatoes",
        "towatdes": "tomatoes",
        "heirluum": "heirloom",
        "min!": "mini",
        "ckshews": "cashews",
        "velljw": "yellow",
        "seafdod": "seafood",
        "babv": "baby",
        "culdrs": "colors",
        "sunfluwer": "sunflower",
        "anchuvies": "anchovies",
        "lhich": "chick",
        "brnrnrs": "bananas",
        "strubry": "strawberry",
        "rvocrdo": "avacado",
        "breed": "bread",
        "bhkerv": "bakery",
        "bfikerv": "bakery",
        "lemgns": "lemons",
        "banams": "bananas",
        "faijins": "raisins",
        "blackfgrest": "blackforest",
        "salmdn": "salmon",
        "filleys": "fillets",
        "uil": "oil",
        "oeans": "beans",
        "ohoc": "choc",
        "sneei": "sweet",
        "ciiierio": "citterio",
        "oananas": "bananas",
        "p01a10": "potato",
        "oarrois": "carrots",
        "nhole": "whole",
        "iraoiiional": "traditional",
        "rmprry": "raspberry",
        "cucuhbfrs": "cucumbers",
        "crhckers": "crackers",
        "nhvel": "navel",
        "tohhto": "tomato"
    }
    return {        
        clean: function(text){

            if (map.hasOwnProperty(text)){
                return map[text];
            } else {
                return text;
            }
        }
    }
}