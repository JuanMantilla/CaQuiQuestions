<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Questionary;
use App\User;

class Questionaries extends Controller
{
    public function getByUser($id){
        $questionaries = User::find($id)->with(['questionaries.questions.answers'])->get();
        return $questionaries;
    }
}
