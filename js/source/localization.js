/*jshint multistr: true */
var localisation = {
	'cs' : {
		'of' : 'z',
		'persons' : 'osob',
		'extrabed' : 'přistýlek',
		'title_restaurace' : 'RESTAURACE',		
		'rooms' : 'POKOJE',
		'capacity' : 'Kapacita:',
		'order_room' : 'OBJEDNAT POKOJ',
		'contact' : 'KONTAKT',
		'close' : 'ZAVŘÍT',
		'price_per_night' : 'Kč/noc',
		'prices' : 'CENY',
		'price' : 'Cena:',
		'price_season' : 'Cena sezóně:',
		'gift_certificate' : 'DÁRKOVÝ POUKAZ',
		'besidka_text' : '\
			<p>„Besídka„ je místem setkání, restaurací, hotelem vyhřezávajícím až do nově otevřeného hostelu „Modrá hvězda“v sousedním propojeném domě, ale i keramickou a textilní dílnou, kde můžete malovat hrnečky nebo tisknout trička.</p>\
            <p>Tento dům koupilo 27.6. 1988 sedm statečných z  divadla Sklep a Manželka národů, totalita byla tou dobou tak hluboká, že si neviděli na špičku nosu a nejdál byli v kredenci.</p>\
            <p>Citát z dob kdy „Besídka“ byla jen divadelně literární formou, než se zhmotnila do podoby domu s  restaurací a barem coby hlavou, břišní kuchyní a jaterně-ledvinovým sklepem a srdcem v  renesančním sále, který není vůbec renesanční.</p>',
		'bohac_desc' :  "<a>PAN BOHÁČ</a><br/><br/>Mezi gotickými stěnami v nejstarší části zároveň největší apartmán. Dvojlůžkový s čtyřmi možnými přistýlkami. Na barokním stropě odlesky řádění ohňového mužíka v původních kachlových kamnech. Místo černé kuchyně černá koupelna a v bílé vaně jsou nad hlavou už jenom hvězdy.",
		'gena_desc' : "<a>MANŽELKA NÁRODŮ</a><br/> <br/>Renesanční perla v jižním okně je jenom vaše.Dvořané v koupelně zrovna odešli ze svého okroví křivolakého království, ale středověk zůstal v místnosti za žlutí barokních dveří, nejstarších v Besídce.",
    	'hanak_desc' : "<a>PAN HANÁK</a><br/><br/>Na katafalku před malinovým oltářem pod renesanční klenbou váháte,zda jste v nebi,v pekle či v pokoji Tomáše Hanáka. Popsaná koupelna snad napoví,ale jistotu získáte  teprve, až přijde váš čas.",
	    'korys_desc' : "<a>PAN KORÝS</a><br/><br/>Nejmenší, přesto dvoulužkový pokoj s největším oknem v domě. Severovýchodní orientace s raním sluncem na červené střeše pod vámi. V dešti a sněhu jen pár centimetru od venkovního běsnění. Ve sprchovém koutě zvěčněn Vladimírou Boháčovou chrlič s nekonečnými nápady",
	    'koutak_desc' : "<a>PAN KOUŤÁK</a><br/><br/>Himalájská strmost s neuviditelným průhledem na věž kostela ukrývá dvojlůžkový pokoj s dvěmi samostatnými přistýlkami. Za brahmánsky oranžovou úložnou stěnou ukryt v koupelně Šiwa v představách Ireny Mudrové. V kruhové posteli a tichu ztratíte pojem času.",
	    'kusiak_desc' : "<a>PAN KUŠIAK</a><br/><br/>Vystřeleni spirálou schodiště do modrobíla na kapitánském můstku dalekou vyhlídkou do kraje.Místo moře červen střech před přídí. V 21. století a přece za renesančním štítkem s věžními hodinami jako kotvou v minulosti. ",
	    'vavra_desc' :  "<a>PAN VÁVRA</a><br/><br/>Dvoulůžkový pokoj s až čtyřmi přistýlkami ve dvou pohodlných rozkládacích pohovkách.  Noemova archa břichem vzhůru s jedinečným výhledem do náměstí. Jeden z největších pokojů v domě s jihojihozápadní orientací a dlouhými večerními paprsky slunce. Koupelna vymalovaná vlastnoručně Davidem Vávrou.",
	    'zampic_desc' : "<a>PAN ŽAMPA</a><br/><br/>Prastaré Mexiko v šedi a dubu s unaveným domorodcem na mezku v koupelně. Útulné hnědavo šikmých stěn pod nejstarším krovem. Místo, kde prospat den není ztrátou ale zážitkem. ",
	    'renesance_desc' : "<a>RENESANCE</a><br/><br/>Rokokové renesanční sál s výhledem do náměstí, jehož téměř 100 m čtverečních vyzývá k tanci, rautum, seminářům ale i cvičení jógy. Rokokové štuky, kachlová kamna a náměstí jako na dlani. <br/><br/>Nájem dle dohody",
	    'koucky_desc' : "<a>PAN KOUCKÝ</a><br/><br/>Jeden pokoj, dvě schodiště, tři výškové úrovně, čtyři postele a v koupelně Fibonacci v nekonečné spirále, konkuruje základnímu trojúhelníku na místě  stráženém tím geniem z ostrova Samos.",
	    'ceplecha_desc' : "<a>PAN CEPLECHA</a><br/><br/>Pod renesančním stropem  Besídky a za sklem zurčící Kali Gandaki v kamenech Himaláje, nelze se netěšit do koupelny, kde člověk není nikdy sám.",
	    'vrba_desc' : "<a>PAN VRBA</a><br/><br/>Pokoj bez bariér i motorkářem průjezdný, kde vrba z toskánského pobřeží liry plodící, dala základ celé Besídce bez potřeby bankéřův.",
	    'haty_desc' : "<a>MR. HATY</a><br/><br/>Za posuvnými dveřmi v posteli pod mostem lze přemítat o iracionalitě a transcendentnosti světa a čísla nad vanou v koupelně, kde Ludolf zanechal svou geometrickou stopu, protože i Haty byl geometrem.",
	    'selected_room': 'Vybraný pokoj:',
	    'people_count': 'Počet osob (bez dětí):',
	    'add_kids': 'Přidat děti',
	    'kids3': 'Děti do 3 let (zdarma):',
	    'kids312': 'Děti od 3 do 12 let (sleva 50%):',
	    'nights': 'Počet nocí:',
	    'date_arrive': 'Datum příjezdu:',
	    'date_arrive_note': 'zobrazí obsazenost pokoje',
	    'date_departure': 'Datum odjezdu:',
	    'approx_price': 'Přibližná cena (beze slev):',
	    'person_count' : 'Počet osob:',
		'name' : 'Jméno:',
		'fname' : 'Příjmení:',
		'mail' : 'Email:',
		'telephone' : 'Telefon:',
		'city' : 'Město:',
		'street' : 'Ulice:',
		'psc' : 'PSČ:',
		'nationality' : 'Státní příslušnost:',
		'extra_bed' : 'Přistýlka:',
		'dog' : 'Pes:',
		'tiny_bed' : 'Děstská postýlka:',
		'voucher' : 'Číslo voucheru:',
		'note' : 'Poznámka:',
		'room' : 'Pokoj:',
		'reservation_details' : 'Detaily rezervace:',
		'personal_data' : 'Osobní údaje:',
		'ordered_services' : 'Objednané služby:',
		'personal_data_next' : '2. Osobní Údaje >>',
		'room_select_prev' : '<< 1. Výběr pokoje',
		'personal_data_prev' : '<< 2. Osobni udaje',
		'services_prev' : '<< 3. Služby',
		'services_next' : '3. Služby >>',
		'order_next' : '4. Objednávka >>',
		'order' : 'Objednat'
	},
	'en' : {
		'of' : 'of',
		'persons' : 'persons',
		'extrabed' : 'extra beds',
		'title_restaurace' : 'RESTAURANT',
		'rooms' : 'ROOMS',	
		'capacity' : 'Capacity:',
		'order_room' : 'ORDER ROOM',
		'contact' : 'CONTACT',
		'close' : 'CLOSE',
		'price_per_night' : 'CZK/night',
		'prices' : 'PRICES',
		'price' : 'Price:',
		'price_season' : 'Price season:',
		'gift_certificate' : 'GIFT CERTIFICATE',
		'besidka_text' : '\
			<p>“Besidka” is a meeting place, restaurant, gallery and a design hotel, now spanning a recently opened hostel “The Blue Star” in the neighbouring house as well as a ceramics and textiles workshop where you can design and print your own t-shirt and even paint a cup.</p>\
			<p>The house in which “Besidka” is located, was bought on the 27th of June 1988 by seven brave men from the Sklep theatre and the Wife of the Nations, back then the totalitarian regime was still so deep that they didn’t see further than the tip of their noses and couldn’t get any further than the closet. </p>\
			<p>A quote from the time when “Besidka” existed only in a literary-theatre form before it metarialised into a form when the restaurant and bar became the head, the kitchen became the belly and the cellar serves as liver-kidney with a heart in the Renaissance hall which is not at all Renaissance-like.</p>',
		'bohac_desc' :  "<a>MR. BOHÁČ</a><br/><br/>The largest suite among the Gothic walls of the oldest part of the house Double room, option of four extra beds. Watch the fire sprite’s fury in the original tile stove reflect on the Baroque ceiling. The original black kitchen was turned into a black bathroom. Watch the stars from your white bathtub.",
		'gena_desc' : "<a>THE WIFE OF THE NATIONS</a><br/><br/>A Renaissance pearl in the south window, just for you. The courtiers who usually dwell in the bathroom have just left the ochre labyrinth of their kingdom; however, the Middle Ages are alive and well behind the yellow Baroque door, the oldest one on Besídka.",
    	'hanak_desc' : "<a>MR. HANÁK</a><br/><br/>On the catafalque in front of the raspberry altar under the Renaissance vaulting, you wonder whether this is Heaven,Hell or Tomáš Hanák’s room. The bathroom may give you a clue, but you will only be certain when your time comes.",
	    'korys_desc' : "<a>MR. KORÝS</a><br/><br/>The smallest room with the biggest window of the house, yet still a double. Facing northeast with the morning sun on the red roof below. In rain and snowstorms, you are just inches from the fury outside. In the shower, Vladimíra Boháčová created a gargoyle of infinite ideas.",
	    'koutak_desc' : "<a>MR. KOUŤÁK</a><br/><br/>The sheerness of the Himalayas with an incredible view of the church tower hides a double room with two extra optional beds. The bathroom behind a storage of Buddhist orange hides the god Shiva as imagined by Irena Mudrová. In the silence of the circular bed, you will lose the sense of time.",
	    'kusiak_desc' : "<a>MR. KUŠIAK</a><br/><br/>The spiral of the staircase shoots you up to the great white and blue, for a far view from the bridge. Fore, there is a sea of red roofs. In the 21st century, the Renaissance gable and the tower clock anchor you safely in the past.",
	    'vavra_desc' :  "<a>MR. VÁVRA</a><br/><br/>A double room with up to four extra beds in two comfortable unfolding sofas. A Noah’s Ark upside down, with a unique view of the square. One of the largest rooms in the house, facing south-south-west, catching the long evening sunrays. David Vávra painted the bathroom himself.",
	    'zampic_desc' : "<a>MR. ŽAMPA</a><br/><br/>The oak and gray of old Mexico, with a tired peon and his mule in the bathroom. Cozy slanted walls under the oldest rafters. A place where sleeping through the day is an experience, not a waste.",
	    'renesance_desc' : "<a>THE RENAISSANCE HALL</a><br/><br/>A Rococo-Renaissance hall with a view of the square. Its almost 1000 square feet invite you to dance, receptions, workshops or yoga classes. Rococo stucco decorations, a tile stove and whatever is just happening on the square.",
	    'koucky_desc' : "<a>MR. KOUCKÝ</a><br/><br/>One room, two sets of stairs, three levels, four beds and an infinite Fibonacci spiral in the bathroom, competing with a triangle guarded by the genius from the island of Samos.<br/>",
	    'ceplecha_desc' : "<a>MR. CEPLECHA</a><br/><br/>Under Besídka‘s Reinessaince ceiling, in the shadow of the mighty Kali Gandaki cascading over Himalayan pebbles, it is impossible not to cherish the bathroom where one is never alone.<br/>",
	    'vrba_desc' : "<a>MR. VRBA</a><br/><br/>A room without barriers, accessible to even an enthusiastic motorcyclist, where a willow from the Tuscan coast gave rise to Besidka, with no need of a banker’s hand.<br/>",
	    'haty_desc' : "<a>MR. HATY</a><br/><br/>In a bed behind the partition you can contemplate the irrationality and transcendence of the world and numbers, since Ludolf left a geometric footprint in the bathroom and Haty was a geometer too.<br/>",
		'selected_room': 'Selected room:',
	    'people_count': 'Number of people (adults):',
	    'add_kids': 'Add kids',
	    'kids3': 'Kids under 3 years (free):',
	    'kids312': 'Kids between 3 and 12 years (50% discount):',
	    'nights': 'Number of nights:',
	    'date_arrive': 'Arrival date:',
	    'date_arrive_note': 'will display room reservation overview',
	    'date_departure': 'Departure date:',
	    'approx_price': 'Approx. price (without discounts):',
	    'person_count' : 'Person #:',
		'name' : 'First name:',
		'fname' : 'Family name:',
		'mail' : 'Email:',
		'telephone' : 'Telephone:',
		'city' : 'City:',
		'street' : 'Street:',
		'psc' : 'Zip code:',
		'nationality' : 'Nationality:',
		'extra_bed' : 'Extra bed:',
		'dog' : 'Dog:',
		'tiny_bed' : 'Kid bed:',
		'voucher' : 'Voucher number:',
		'note' : 'Note:',
		'room' : 'Room:',
		'reservation_details' : 'Reservation details:',
		'personal_data' : 'Personal info:',
		'ordered_services' : 'Ordered room services:',
		'personal_data_next' : '2. Personal data >>',
		'room_select_prev' : '<< 1. Room select',
		'personal_data_prev' : '<< 2. Personal data',
		'services_prev' : '<< 3. Services',
		'services_next' : '3. Services >>',
		'order_next' : '4. Order >>',
		'order' : 'Order'
	}
};

var defaultLanguage = 'cs'; 
	currentLocalisation = localisation[defaultLanguage];