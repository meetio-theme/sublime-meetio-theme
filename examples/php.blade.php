{{--
    1. Install "Laravel Blade Highlighter" extension for syntax support
    2. Set Syntax: Laravel Blade
--}}

<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel Example</title>
</head>
<body>
    @extends('layouts.app')

    @section('title', 'Page Title')

    @section('sidebar')

    <div class="container">
        @foreach ($users as $user)
            @if ($user->type == 1)
                @continue
            @endif

            <li>{{ $user->name }}</li>

            @if ($user->number == 5)
                @break
            @endif
        @endforeach
    </div>

    <p>This is appended to the master sidebar.</p>
    @endsection

    @section('content')
    <p>This is my body content.</p>
    @endsection

</body>
</html>
