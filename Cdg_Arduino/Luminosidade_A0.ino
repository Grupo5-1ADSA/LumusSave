
int ldr_pin = A0, leitura_ldr = 0;

int switch_pin = 7;

void setup() 
{
  Serial.begin(9600);
  dht_1.begin();
  pinMode(switch_pin, INPUT);
}
 
void loop() {
  /**
   * Bloco do LDR5
   */
  leitura_ldr = analogRead(ldr_pin);
  Serial.print(leitura_ldr);
  Serial.print(";");
   
}
