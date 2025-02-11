<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SongController extends Controller
{
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

    public function index()
    {

        $song = [
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
        ];


        return response()->json($song);
    }
    public function showVerse($songId, $verseNumber)
    {
        // Verificar si la canción existe
        if (!isset($this->songs[$songId])) {
            return response()->json(['message' => 'Song not found'], 404);
        }

        $song = $this->songs[$songId];

        // Buscar el verso por su número
        foreach ($song['verses'] as $verse) {
            if ($verse['number'] == $verseNumber) {
                return response()->json($verse);
            }
        }

        // Si no se encuentra el verso, devolver un error 404
        return response()->json(['message' => 'Verse not found'], 404);
    }
}
