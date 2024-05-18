<?php

namespace Database\Factories;

use App\Models\Proceso;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ProcesoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Proceso::class;

    public function definition(): array
    {
        $nombre = $this->faker->word();
        $prefijo = strtoupper(substr($nombre, 0, 3));

        return [
            'pro_prefijo' => $prefijo,
            'pro_nombre' => $nombre,
        ];
    }
}
