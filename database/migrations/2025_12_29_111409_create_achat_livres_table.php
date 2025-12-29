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
        Schema::create('achat_livres', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->deleteOnCascad();
            $table->string('theme');
            $table->string('efant_name');
            $table->string('age');
            $table->string('ton');
            $table->string('photo')->nullable();
            $table->string('note')->nullable();
            $table->string('morale');
            $table->string('langue');
            $table->string('pronom');
            $table->string('duree');
            $table->string('generate')->default(false);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('achat_livres');
    }
};
