<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => "Juan",
            'id' => "1",
            'type' => "normal",
            'email' => 'js.mantilla128@gmail.com',
            'password' => bcrypt('secret'),
        ]);

        DB::table('questionaries')->insert([
            'name' => "Cuestionario 1",
            'id' => "1",
            'user_id' => "1",
        ]);

        DB::table('questionaries')->insert([
            'name' => "Cuestionario 2",
            'id' => "2",
            'user_id' => "1",
        ]);

        DB::table('questions')->insert([
            'value' => "Pregunta 1",
            'id' => "1",
            'questionary_id' => "1",
        ]);

        DB::table('questions')->insert([
            'value' => "Pregunta 2",
            'id' => "2",
            'questionary_id' => "1",
        ]);

        DB::table('answers')->insert([
            'value' => "Respuesta 1",
            'id' => "1",
            'question_id' => "1",
        ]);

        DB::table('answers')->insert([
            'value' => "Respuesta 2",
            'id' => "2",
            'question_id' => "2",
        ]);
    }
}
