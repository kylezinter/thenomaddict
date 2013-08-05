<?php 
App::uses('HttpSocket', 'Network/Http');
$nomaddict_config = Configure :: read('connection');

$http = new HttpSocket();
$url = $nomaddict_config['tours-db']."&q={'tourName':'".$tour."'}";
$response = $http->get($url);

$json = json_decode($response);

echo $this->element('tourHeader');

// $population = $json->population;
// $founded = $json->founded;
// $coords = $json->coords;
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