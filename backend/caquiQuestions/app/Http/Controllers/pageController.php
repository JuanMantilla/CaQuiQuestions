<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class pageController extends Controller
{
   public function index() {
      $apiUrl=env('URL_API');
      return view('index')->with('apiUrl', $apiUrl);
   }
}
