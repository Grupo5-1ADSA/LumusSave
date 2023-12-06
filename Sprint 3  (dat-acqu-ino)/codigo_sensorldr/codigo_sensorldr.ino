int ldr_pin = A0, leitura_ldr = 0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  leitura_ldr = analogRead(ldr_pin);
  Serial.print(leitura_ldr);
  Serial.println(";");
  delay(2000);
}
