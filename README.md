# Gernikatik-Mundura


---
## Azalpen orokorra

Guk, App-ean Gernika-Lumoko herriaren historia aztertuko dugu eta horretarako, bertako 5 ondare kulturalaz baliatuko gara. Batzuk, fisikoki existitzen dira eta beste batzuk fisikoak ez diren tradizioak direla esan dezakegu.  

Ezagutuko ditugun kultura ondareak hauek dira:  

1. **Jai Alai Pilotalekua** → Pilotalekuan bertan  
2. **Batzarretxe eta arbola** → Batzarretxea eta arbola dauden tokian  
3. **Urriko Azken Astelehena** → Pasilekuan  
4. **Marijesiak** → Udaletxean  
5. **Astra** → Astra lantegia dagoen lekuan  

Leku hauen berri emateko, aktibitate eta joko desberdinez baliatuko gara. Hauetako batzuk beheko tauletan daude zehatz-mehatz azalduta.  

### Aktibitateak  
Joko eta ariketa ezberdinak izango dira, besteak beste:  

- **Letra-sopak**  
- **Bikoteak bilatzea**  
- **Puzzleak**  

### Helburuak  
Gure helburu nagusia App honekin:  

- Ikasleek **kultura ondarea zer den eta honen balioa ezagutzea**.  
- Gernikako txoko desberdinak eta hauen **garrantziaz kontziente izatea**.  

---

## Antolakuntza

### GitHub erabilera

Gure proiektuaren garapenean GitHub plataforma erabili dugu, kodearen bertsio-kontrola egiteko eta taldeko lankidetza errazteko. GitHub-en bidez, aldaketa guztiak modu ordenatuan erregistratu eta kudeatu ditugu, horrela, taldekide guztiek azken bertsioa eskuragarri izan dute une oro. Gainera, adar (branch) sistema erabili dugu garapen-fase desberdinak bereizteko eta bateratzeko.

### Gantt metodologia

Proiektuaren antolaketan Gantt metodologia erabili dugu, zereginak eta epeak modu bisual eta egituratuan antolatzeko. Honi esker, proiektuaren aurrerapena jarraitu ahal izan dugu, eta denboraren kudeaketa eraginkorragoa izan da. Zeregin bakoitzaren ardura banatu dugu eta erantzuleak zehaztu ditugu, epeak betetzea errazteko.

### Canva erabilera

Bestalde, Canva metodologia erabili dugu proiektuaren estrategia eta lan-banaketa argi definitzeko. Horrek aukera eman digu ideiak antolatzeko, lan-prozesuak diseinatzeko eta helburu argiak ezartzeko. Canva-ren bidez, taldeko kide bakoitzak bere zereginak eta helburuak modu argian ulertu ditu, eta koordinazioa hobetzeko tresna eraginkorra izan da.


![Github gant](/AppArgazkiak/github.png)

---

## Diseinua

### Kolore Paleta.

- **Limu Berdea**  
  - **Kolorea:** Berde distiratsu.  
  - **Hex Kodea:** `#A8D600`  
  - **Deskribapena:** Freskotasuna eta energia iradokitzen ditu, sormena estimulatzerakoan egokiena.  

- **Laranja**  
  - **Kolorea:** Laranja bizi.  
  - **Hex Kodea:** `#FF6F00`  
  - **Deskribapena:** Aitortza eta animatua den kolorea da, ilusioa sortzen duena.  

- **Zuria**  
  - **Kolorea:** Zuria.  
  - **Hex Kodea:** `#FFFFFF`  
  - **Deskribapena:** Kolore argiena da eta purutasuna, bakea eta sinpletasuna iradokitzen ditu. Diseinu grafikoan, kolore ilunekin kontraste handi bat sortzeko erabiltzen da, eta garbitasun eta zabaltasun sentsazioa ematen du.  


### Letra Tipoa

 - **Izena:** Andika  
  - **Deskribapena:** Andika letra tipoa irakurtzeko erraztasunez diseinatuta dago, batez ere, irakurtzean zailtasunak dituzten pertsonei laguntzeko. Forma garbiak eta espazio egokiak ditu, irakurketa esperientzia hobetzeko.  
  - **Erabilera:** Andika letra tipoa eskolan, irakaskuntzan, eta irakurtzean zailtasunak dituzten erabiltzaileentzako materialetan oso egokia da.  

### Ikonoak

- **Erabilera:**  
  - **Deskribapena:** Hiru ikono honek erabili ditugu oso errazak direlako ikusteko eta gure erabiltzaileak umeak direnez, errazago dute ulertzeko.  


  - <img src="/GernikaApp/src/assets/icon/arrow.png" alt="Atzera ikonoa" width="30"> **Ikono hau** atzera egiteko erabiltzen da.  
  - <img src="/GernikaApp/src/assets/icon/map.png" alt="Mapa ikonoa" width="30"> **Ikono hau** klik egiterakoan maparen orrialdea irekiko da.  
  - <img src="/GernikaApp/src/assets/icon/Volume-up.png" alt="Audio ikonoa" width="30"> **Ikono hau** klik egiterakoan audioa entzungo da.  

### Petsonaiak:

<img src="/GernikaApp/src/assets/images/MariArgazkia-removebg-preview.png" alt="Audio ikonoa" width="100">
<img src="/GernikaApp/src/assets/images/PeruArgazkia-removebg-preview.png" alt="Audio ikonoa" width="120">

Hauek izango dira gure 2 protagonistak, eskuman **Peru** eta ezkerran **Mari**.
Bi honek, adeitasunez azalduko dute jolasen dinamika eta bukaeran zure emaitza azalduko dizuen pertsonaiak dira.


### Estilo gida:

Hemen uzten dizuen estilo gidaren argazkia

![Github gant](/AppArgazkiak/estilo%20gida.png)

```env
# Configuración de la base de datos
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=api_gernika
DB_USERNAME=root
DB_PASSWORD=Admin123
```

## PLACES

### Modelo y Migración
Se crea el modelo `Place` y la migración correspondiente para definir la estructura de la tabla en la base de datos.

### Seeder para Insertar Datos

```php
public function run()
{
    Place::create([
        'name' => 'Jai Alai Pilotalekua',
        'latitude' => 43.31748,
        'longitude' => -2.67833,
    ]);

    Place::create([
        'name' => 'Batzarretxe eta Arbola',
        'latitude' => 43.31326,
        'longitude' => -2.67922,
    ]);

    Place::create([
        'name' => 'Marijesiak (Udaletxean)',
        'latitude' => 43.31554,
        'longitude' => -2.67881,
    ]);

    Place::create([
        'name' => 'Urriko Azken Astelehena (Pasilekuan)',
        'latitude' => 43.31393,
        'longitude' => -2.67885,
    ]);

    Place::create([
        'name' => 'Astra',
        'latitude' => 43.31303,
        'longitude' => -2.67537,
    ]);
}
```

### Controlador `PlaceController`

```php
class PlaceController extends Controller
{
    // Obtener todos los lugares
    public function index()
    {
        $places = Place::all();
        return PlaceResource::collection($places);
    }

    // Obtener un lugar específico
    public function show($id)
    {
        $place = Place::findOrFail($id);
        return new PlaceResource($place);
    }

    // Crear un nuevo lugar
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ]);

        $place = Place::create($validatedData);
        return new PlaceResource($place);
    }

    // Actualizar un lugar existente
    public function update(Request $request, $id)
    {
        $place = Place::findOrFail($id);
       
        $validatedData = $request->validate([
            'name' => 'sometimes|string|max:255',
            'latitude' => 'sometimes|numeric',
            'longitude' => 'sometimes|numeric',
        ]);

        $place->update($validatedData);
        return new PlaceResource($place);
    }

    // Eliminar un lugar
    public function destroy($id)
    {
        $place = Place::findOrFail($id);
        $place->delete();
        return response()->json(null, 204);
    }
}
```

### Formato de los Datos y Rutas

```php
namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PlaceResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
```

```php
Route::get('places', 'App\Http\Controllers\Api\PlaceController@index');
Route::get('/places/{id}', 'App\Http\Controllers\Api\PlaceController@show');
Route::post('places', 'App\Http\Controllers\Api\PlaceController@store');
Route::put('/places/{id}', 'App\Http\Controllers\Api\PlaceController@update');
Route::delete('/places/{id}/', 'App\Http\Controllers\Api\PlaceController@destroy');
```

## SONG

### Datos de la Canción

```php
private $songs = [
    1 => [
        'title' => 'Urte barri,barri',
        'verses' => [
            [
                'number' => 1,
                'lines' => [
                    'Agur urte bat, barria dator',
                    'kanta “urte barri barri”,',
                    'joan jakuna gogoz eskertu',
                    'ondo_etorri barriari;',
                    'bake bidean emon pausua,',
                    'Barri Ona iragarri,',
                    'gure ustea ta konfiantza',
                    'Jaunagan bakarrik jarri.'
                ]
            ],
            [
                'number' => 2,
                'lines' => [
                    'Barri Onaren irakurketan',
                    'bost minutu egunero,',
                    'alkarteagaz meza ospatzen',
                    'joateko pozik gero.',
                    'Uda sasoian umorez bete',
                    'trikia eta pandero',
                    'ermita eta santu guztiei',
                    'errezatuz bero bero.'
                ]
            ],
            [
                'number' => 3,
                'lines' => [
                    'Pobrea eta apala dana',
                    'inoiz ez dagigun saldu,',
                    'elizan eta gero etxean',
                    'fededun legez azaldu,',
                    'esperantza ta maitetasuna',
                    'indartu eta ez galdu:',
                    'Jesus laguna ta barri ona',
                    'sakondu eta zabaldu.'
                ]
            ]
        ]
    ]
];
```

### Controlador `SongController`

```php
public function index()
{
    return response()->json($this->songs[1]);
}

public function showVerse($songId, $verseNumber)
{
    if (!isset($this->songs[$songId])) {
        return response()->json(['message' => 'Song not found'], 404);
    }

    $song = $this->songs[$songId];

    foreach ($song['verses'] as $verse) {
        if ($verse['number'] == $verseNumber) {
            return response()->json($verse);
        }
    }

    return response()->json(['message' => 'Verse not found'], 404);
}
```

### Definición de Rutas

```php
Route::get('/song', [SongController::class, 'index']);
Route::get('/song/{id}/', [SongController::class, 'show']);
Route::get('/song/{songId}/verse/{verseNumber}', [SongController::class, 'showVerse']);
```

## Rest API Kontsumitu

Google Maps API erabiltzen da mapa interaktibo bat erakusteko Angular eta Ionic inguruneetan. Maparen gainean hainbat markatzaile erakusten dira, eta hauek API baten bidez eskuratzen dira. Interneteko konexiorik ez badago, `localStorage` erabiliko da azken datuak gordetzeko.

### Erabilitako Teknologiak

- **Angular** (Component eta `AfterViewInit` erabiliz)
- **Ionic Framework** (UI osagaiak eta nabigazioa kudeatzeko)
- **Google Maps API** (mapa eta markatzaileak bistaratzeko)
- **HttpClient** (API-deiak egiteko)
- **LocalStorage** (markatzaileen datuak gordetzeko)

### Funtzionamendua

1. **Mapa kargatzea**: `ngAfterViewInit` metodoak `loadMap()` deitzen du, honek Google Maps erakusten du hasierako kokapen batean.
2. **Markatzaileak eskuratzea**: `fetchMarkers()` funtzioak API batetik datuak lortzen ditu. API-ak daturik ematen ez badu, `cargarMarkersDesdeLocalStorage()` metodoa erabiltzen da azken gordetako markatzaileak berreskuratzeko.
3. **Markatzaileak prozesatzea eta bistaratzea**: `procesarMarkers()` metodoak API-aren erantzuna irakurri eta markatzaile gisa formateatzen du. `renderMarkers()` funtzioak mapa gainean gehitzen ditu.
4. **Markatzaileekin interakzioa**: Markatzaile batean klik eginez gero, `infoWindow` bat irekiko da eta izenburua erakutsiko da.

### Funtzio Nagusiak

- `goBack()`: Aurreko orrira itzultzeko aukera ematen du.
- `loadMap()`: Google Maps API erabiliz mapa kargatzen du.
- `fetchMarkers()`: API-dei bat eginez markatzaileak eskuratzen ditu.
- `procesarMarkers()`: API-tik jasotako datuak egituratzen eta gordetzen ditu.
- `cargarMarkersDesdeLocalStorage()`: Konexiorik ez badago, aurrez gordetako datuak berreskuratzen ditu.
- `renderMarkers()`: Markatzaileak bistaratzen ditu mapan.
- `addMarker()`: Markatzaile bat mapan gehitzen du eta klik egitean informazioa erakusten du.

### Erabilitako API-a

Goian aipatu den bezala, gure Rest API-a erabiltzen dugu puntuak ezartzeko.

**APIaren helbidea:** `https://192.168.73.128/api/places`

### Ondorioa

Kode honek Google Maps API erabiltzeko adibide praktiko bat erakusten du Angular eta Ionic inguruneetan. Mapa dinamikoa da, eta markatzaileak API-tik lortzen ditu, baina offline funtzionamendua ere badu `localStorage` bidez. Azkenik, erabiltzaileak markatzaileekin interakzioa egin dezake `infoWindow` erabiliz.


# Irisgarritasuna

Irisgarritasun proiektu honek bista txarra duten umeak kontuan hartuta web orrialde irisgarri bat sortzea du helburu. Helburu nagusia da erabiltzaile guztientzat, bereziki ikuskera murriztu duten haurrei, erraztasun handiena eskaintzea.

## Ezaugarriak

### Botoi Erakargarriak
- **Diseinu Handiak eta Argizkoak:**  
  Botoi handiak eta erakargarriak sortu ditugu, erabiltzaileek erraz identifikatu eta sakatu ahal izateko. Diseinu hau haurren arreta erakartzeko eta erraz ikusteko egokituta dago.

### Kolorearen Aukera
- **Kolore Laranja:**  
  Estetika eta energia transmititzeko, laranja kolorea erabili dugu. Kolore hau, psikologia kolorearen ikuspegitik, akatsak zuzeneko irakaspen batekin irudikatzen baita eta ilusioa eta positibismoa ekartzen du.

### Irisgarritasun Araudiak
- **WCAG:**  
  Irisgarritasunari dagokionez, WCAG (Web Content Accessibility Guidelines) araudiak aztertu ditugu. Horrela, gure proiektua araudi horien arabera konforme dagoela ziurtatu nahi dugu, eta irisgarritasun premia nagusiak identifikatu ditugu.

## Testeatzeko Prozesua

### Irisgarritasun Tresnak
- **WAVE eta Axe:**  
  Web orrialdearen irisgarritasuna ebaluatzeko WAVE eta Axe bezalako tresnak erabili ditugu. Tresna hauek irtenbide iraunkorrak zehazteko laguntza ematen dute.

### Nabigazioa
- **Erabiltzaile Esperientzia:**  
  Nabigazio erraz eta intuitiboa bermatzea finkatutako helburu nagusietako bat izan da. Hau da, bista txarra duten erabiltzaileek web orrialdea modu eraginkorrean eta errazean esploratu ahal izatea.

---

Erabiltzailearen beharrak lehenesten dituen web orrialde honek irisgarritasun araudia eta hobeto esperientzia baterako praktika onen jarraitzea du helburu.


## Aplikazioaren erabiltzaile gida

https://github.com/user-attachments/assets/8fdf593e-cd68-4096-94c2-750791b9be8c



## 1. Sarrera

Gernikatik Mundura aplikazioak Gernika-Lumoko kultura, ondarea eta tradizioak ezagutzeko aukera ematen du, modu interaktiboan eta dibertigarrian. Mari eta Peru pertsonaiek lagunduta, helburu nagusia da lekuetara gerturatzean jarduerak desblokeatzea eta Gernikako historia hobeto ezagutzea.

## 2. Hasierako Pantaila

- **Mari eta Peru:** Hasieran, pertsonaia bi hauek agertuko dira aplikazioaren xedea labur azaltzeko.
- **“Sartu” edo “Hasiera” Botoia:** Botoi honi sakatuz, aplikazioaren menu nagusira pasatuko zara.
- **Gomendioa:** Irakurri pertsonaiek dioten mezua, Gernikako kultura ondarea nola ezagutu dezakezun argi izateko.

## 3. Mapa eta Geolokalizazioa

- **Mapa Ikonoa:** Aplikazioaren goiburuan edo menuan aurkituko duzu. Sakatu Mapa ikonoan Gernikako mapa interaktiboa irekitzeko.
- **Geolokalizazioa:** Aplikazioak zure kokapena ezagutzen du (baimenak eman ondoren). Gernikako bost puntu nagusietara gerturatzen zarenean, puntu horri lotutako jarduerak aktibatzen dira.

### Puntu Nagusiak

- **Jai Alai Pilotalekua:** 2 jarduera desberdin
- **Batzarretxea eta Arbola:** 1 jarduera
- **Urriko Azken Astelehena:** 2 jarduera antzeko
- **Marijesiak:** 2 jarduera antzeko
- **Astra:** 1 jarduera

**Nola funtzionatzen du?**  
Leku horietara hurbiltzen zarenean, “Jolastu” sakatu jarduerari ekiteko.

## 4. Jokoak eta Jarduerak

Aplikazioak hainbat dinamika proposatzen ditu Gernikako kultur ondarea modu dibertigarrian ezagutzeko. Joko bakoitzaren aurretik, **Mari eta Peru** pertsonaiek azalpen laburra emango dizute.

### Hizki-Sopa

- Hizki-taula batean, bilatu behar dituzun hitzak zerrenda batean ikusiko dituzu.
- Hitz bat topatzean, arrastatu lerro jarraitu bat hizkietatik.

### Puzzleak

- Irudi kultural bat zatikatuta agertzen da.
- Arrastatu piezak dagokien tokira irudia osatzeko.

### Bikoteak Bilatzea (Memoria-jokoa)

- Kartatxoak itzalita agertzen dira.
- Pare berdinak bilatu behar dituzu.

### Ontziak Hondoratzeko

- Karratu-sarean klik eginez, ezkutuko “ontziak” edo elementuak topatu, gure kasuan, astra fabrikaren armak.

### Galderak

- Batzuk testu bidezkoak dira, besteak audio bidez. Erantzuteko, aukeratu dagokion botoia.
- **Kontuan izan:** Jarduerak puntu bakoitzean desberdinak dira. Ez dago zertan hurrenkera jakin bat jarraitu, baina puntu batera iristean, bertako jarduerak soilik irekiko zaizkizu.

## 5. Audio Funtzioa

- **Audio Ikonoa:** Egin klik soinu-ikonoan, testu edo azalpenaren bertsio entzungarria jasotzeko.
- Oso lagungarria da irakurketa-zailtasunak dituztenentzat edo testua entzun nahi dutenentzat.

## 6. Emaitzak eta Aurrerapena

Jarduera bakoitza amaitzean, zure emaitzak agertuko dira (puntuazioa, asmatu dituzun hitzak, puzzle osatzeko denbora, etab.).  
Puntu horietako jarduerak gaindituz, zure aurrerapena gordeta geldituko da.

## 7. Aholku Orokorrak

- **Atzera Ikonoa:** Aplikazioaren pantaila gehienetan topatuko duzu, pantaila aurreko fasera itzultzeko.
- **Mari eta Peru:** Irakurri beti haien mezuak; jolasen funtzionamendua labur azaltzen dute.
- **Geo-baimenak:** Ziurtatu aplikazioari geolokalizazio-baimena eman diozula, bestela ez dira jarduerak desbloqueatuko.
- **Mapa:** Egin zoom in/zoom out hobeto kokatzeko eta informazio osagarria lortzeko.


