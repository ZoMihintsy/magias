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
        Schema::create('achat_users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->cascadeOnDelete();
            $table->foreignId('achat_id')->cascadeOnDelete();
            $table->string('prix');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('achat_users');
    }
};
