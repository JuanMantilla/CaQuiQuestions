<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $table = 'questions';
    protected $fillable = [
        'value', 'questionarie_id'
    ];

    public function questionary()
    {
        return $this->belongsTo('App\Questionary');
    }

    public function answers()
    {
        return $this->hasMany('App\Answer');
    }
}
