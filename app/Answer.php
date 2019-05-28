<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    protected $table = 'answers';
    protected $fillable = [
        'value', 'question_id', 'calification'
    ];

    public function question()
    {
        return $this->belongsTo('App\Question');
    }
}
