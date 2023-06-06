<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pregleds', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_doktor')->nullable();
            $table->foreignId('id_pacijent')->nullable();
            $table->dateTime('datum_pregleda');
            $table->string('opis');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pregleds');
    }
};
