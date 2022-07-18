<?php

namespace Database\Seeders;

use App\Models\Book;
use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Category::create([
            'name' => 'Web Programming'
        ]);
        
        Category::create([
            'name' => 'Anime'
        ]);

        Category::create([
            'name' => 'Personal'
        ]);

        Book::factory(40)->create();
    }
}
