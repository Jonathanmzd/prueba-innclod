<?php

namespace Database\Factories;

use App\Models\TipoDocumento;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TipoDocumento>
 */
class TipoDocumentoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = TipoDocumento::class;

    public function definition(): array
    {
        $nombre = $this->faker->word();
        $prefijo = strtoupper(substr($nombre, 0, 3));

        return [
            'tip_prefijo' => $prefijo,
            'tip_nombre' => $nombre,
        ];
    }
}
