<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Questionary;
use App\User;

class Questionaries extends Controller
{
    public function getByUser($id){
        $questionaries = User::find($id)->questionaries;
        $payload = array();
        foreach ($questionaries as $questionary){
            $payload[$questionary->name] = $questionary;
            $questions = $questionary->questions;
            foreach ($questions as $question){
                $answers = $question->answers;
            }
        }
        return $payload;
    }
}
