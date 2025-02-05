<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PlaceResource;
use App\Models\Place;
use Illuminate\Http\Request;

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