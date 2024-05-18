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
        Schema::create('doc_documento', function (Blueprint $table) {
            $table->increments('doc_id');
            $table->string('doc_nombre', 50);
            $table->integer('doc_id_tipo');
            $table->integer('doc_id_proceso');
            $table->integer('doc_codigo')->unique();
            $table->string('doc_contenido', 4000);
            $table->index('doc_id_proceso');
            $table->index('doc_id_tipo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doc_documento');
    }
};
