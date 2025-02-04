<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PlaceController;
Route::get('/', function () {
    return view('welcome');
    
});
Route::get('/places', [PlaceController::class, 'index']);
Route::get('/places/{id}', [PlaceController::class, 'show']);
