<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AchatUser extends Model
{
    //
    protected $fillable = [
        'user_id',
        'achat_id',
        'prix'
    ];
    public function achat()
    {
        return $this->hasMany(Achat::class, 'achat_id', 'id');
    }
}
