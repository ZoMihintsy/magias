<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AchatLivre extends Model
{
    //
    protected $fillable = [
        'user_id',
        'theme',
        'efant_name',
        'age',
        'ton',
        'photo',
        'note',
        'morale',
        'langue',
        'pronom',
        'generate',
        'duree',
    ];

    public function user()
    {
        return $this->hasMany(User::class, 'user_id', 'id');
    }
}
