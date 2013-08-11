<?php 
App::uses('HttpSocket', 'Network/Http');
$nomaddict_config = Configure :: read('connection');

$http = new HttpSocket();
$url = $nomaddict_config['tours-db']."&q={'tourName':'".$tour."'}";
$response = $http->get($url);

$json = json_decode($response);

echo $this->element('tourHeader', array('cityName' => $json[0]->cityName, 'tourName' => $json[0]->tourName));

$weatherCall = $nomaddict_config['weather'].$json[0]->coordsLat.",".$json[0]->coordsLong;
$weatherResponse = $http->get($weatherCall);
$weatherJson = json_decode($weatherResponse);

//var_dump($weatherJson);

$date = new DateTime('now', new DateTimeZone($weatherJson->timezone));


?>
<section class="tourSection">
	<article class="tourArticle">
		<div class="cityStats">
			<div class="statHolder population">
				<h3 class="statTitle">
					POPULATION
				</h3>
				<span class="stat">
					<?php echo $json[0]->population; ?>
				</span>
			</div>
			<div class="statHolder founded">
				<h3 class="statTitle">
					FOUNDED
				</h3>
				<span class="stat">
					<?php echo $json[0]->founded; ?>
				</span>
			</div>
			<div class="statHolder coords">
				<h3 class="statTitle">
					COORDINATES
				</h3>
				<span class="stat">
					<?php echo $json[0]->coords; ?>
				</span>
			</div>
			<div class="statHolder weather">
				<h3 class="statTitle">
					CURRENT WEATHER
				</h3>
				<span class="stat">
					<?php
					echo $weatherJson->currently->summary;
					echo " ";
					echo round($weatherJson->currently->temperature);
					echo "&deg";
					?>
				</span>
			</div>
			<div class="statHolder time">
				<h3 class="statTitle">
					CURRENT TIME
				</h3>
				<span class="stat">
					<?php
					echo $date->format("H:i"); 
					?>
				</span>
			</div>				
		</div>
		<div class="tourStory">
			<p class="tourP">
				<?php echo $json[0]->intro; ?>
			</p>
			<div class="tourColumn">
				<?php 
				foreach($json[0]->tourItems as $key => $value)
				{
					echo '<p class="tourP">';
					echo $value->item;
					echo '</p>';
				}
				?>
			</div>
		</div>
	</article>
</section>
<?php
echo $this->element('footer');
?>