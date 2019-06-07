<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Question;
use App\Answer;

class Questions extends Controller
{
    public function index()
    {
		$accion = Question::all();
		return response()->json($accion);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $this->question = Question::create($request->all());

        foreach($request->answers as $answer){
            $answer = (object) $answer;
            $answer->question_id = $this->question->id;
            $answer = (array) $answer;
            Answer::create($answer);
        }

		return response()->json(["message"=>"Creado correctamente"]);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $this->question=Question::find($id);
        $this->question->answers = $this->question->answers()->get();
        return response()->json($this->question);
    }

    public function getByQuestionary($id)
    {
        $questions=Question::where('questionary_id', $id)
            ->orderBy('id', 'asc')
            ->get();
        return response()->json($questions);
    }
	
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->question=Question::find($id);
		$this->question->fill($request->all());
        $this->question->save();
        $this->question->answers = $this->question->answers()->get();

        $answersFromRequest = [];
        $answersFromDB = [];
        foreach($request->answers as $answer){
            $answer = (object) $answer;
            try {
                $this->answer=Answer::find($answer->id);
                $this->answer->value = $answer->value;
                $this->answer->correct = $answer->correct;
                $this->answer->save();
                // dd($this->answer);
            } catch (\Throwable $th) {
                $answer->question_id = $this->question->id;
                $answer = (array) $answer;
                Answer::create($answer);
            }
        }
        
        foreach($request->answers as $answerFromRequest){
            $answerFromRequest = (object) $answerFromRequest;
            try {
                $answersFromRequest[$answerFromRequest->id] = $answerFromRequest->value;
            } catch (\Throwable $th) {
                continue;
            }
                
        }
        foreach($this->question->answers as $answerFromDB){
            $answersFromDB[$answerFromDB->id] = $answerFromDB->value;
        }

        foreach($this->question->answers as $answer){
            try {
                // Trying to find the answer ID from the ones that are already in the DB, if its not found
                // its because the user deleted it.
                $answersFromRequest[$answer->id];
            } catch (\Throwable $th) {
                $this->answer=Answer::find($answer->id);
                $this->answer->delete();
            }
        }
		return response()->json(["mensaje"=>"Actualizacion exitosa"]);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->question=Question::find($id);
        $this->question->delete();
    }
}
