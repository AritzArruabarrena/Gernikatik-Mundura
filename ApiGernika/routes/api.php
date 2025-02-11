<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\SongController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('places', 'App\Http\Controllers\Api\PlaceController@index');
Route::get('/places/{id}', 'App\Http\Controllers\Api\PlaceController@show');
Route::post('places', 'App\Http\Controllers\Api\PlaceController@store');
Route::put('/places/{id}', 'App\Http\Controllers\Api\PlaceController@update');
Route::delete('/places/{id}/', 'App\Http\Controllers\Api\PlaceController@destroy');
Route::get('/song', [SongController::class, 'index']);
Route::get('/song/{id}/', [SongController::class, 'show']);
Route::get('/song/{songId}/verse/{verseNumber}', [SongController::class, 'showVerse']);