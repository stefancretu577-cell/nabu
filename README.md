# Nabu

A cozy, Sims-like space-habitat game about astronaut health, made for the NASA Space Apps Challenge.
You live on the planet Nabu for a 180-day mission: decorate your base, keep a journal, take care of your body and mind,
and check your health on the laptop in the Health console.

- **Astronaut account**: the base, rooms, journals, market, plant lounge and the Nabu Health app on the laptop.
- **Psychologist account** (`doctor.html`): a live console with fatigue readings, assessments and on-device Guardian flags.
  The psychologist never sees journal text, questionnaire answers or camera images.

## Run it

```
start.bat
```
or
```
python -m http.server 8765
```
then open http://localhost:8765.

All health data in the prototype is simulated.
