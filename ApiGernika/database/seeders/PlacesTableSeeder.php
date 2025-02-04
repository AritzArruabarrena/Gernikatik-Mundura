<?php
namespace Database\Seeders;

use App\Models\Place;
use Illuminate\Database\Seeder;

class PlacesTableSeeder extends Seeder
{
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
}
