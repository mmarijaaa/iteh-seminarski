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
        Schema::create('terapijas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_pregled');
            $table->foreignId('id_doktor');
            $table->foreignId('id_pacijent');
            $table->string('lekovi');
            $table->string('nacin_primene');
            $table->string('komentar')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('terapijas');
    }
};
