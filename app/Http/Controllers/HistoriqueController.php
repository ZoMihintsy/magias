<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HistoriqueController extends Controller
{
    //
    public function client()
    {
        return Inertia::render('Client/Historiques/index');
    }
}
