<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        return $next($request)
        ->header('Access-Control-Allow-Origin', '*')
        // ->header('Access-Control-Allow-Origin','http://localhost:4200/registro')
        ->header('Access-Control-Allow-Methods', 'PUT,GET,POST,OPTIONS,DELETE, HEAD')
        ->header('Access-Control-Allow-Headers', 'Accept,Content-Type,X-Auth-Token,Authorization,Origin');
        // ->header('Allow',"GET,POST,OPTIONS,PUT,DELETE")
        // ->header('Access-Control-Allow-Headers': "Content-Type");


    }
}
